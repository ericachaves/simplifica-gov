
module.exports = async function handler(req, res) {
  // Aceita somente requisições POST
  if (req.method !== "POST") {
    return res.status(405).json({
      erro: "Método não permitido."
    });
  }

  try {
    const { texto } = req.body || {};

    // Verifica se o usuário enviou um texto
    if (!texto || typeof texto !== "string" || !texto.trim()) {
      return res.status(400).json({
        erro: "Digite um texto para simplificar."
      });
    }

    // Recupera a chave secreta da Vercel
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        erro: "A chave da inteligência artificial não está configurada."
      });
    }

    // Envia o texto para a inteligência artificial
    const resposta = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: "Você é o assistente do Simplifica Gov. Explique informações sobre serviços públicos brasileiros em linguagem simples, clara e acessível. Preserve os prazos, requisitos, valores e orientações importantes. Não invente informações. Se o texto não for suficiente, avise."
            }]
          },
          contents: [{
            role: "user",
            parts: [{
              text: texto
            }]
          }],
          generationConfig: {
          maxOutputTokens: 1024
          }
        })
      }
    );

    const dados = await resposta.json();

    if (!resposta.ok) {
      console.error("Erro na API Gemini:", dados);
      return res.status(502).json({
        erro: "Não foi possível simplificar o texto."
      });
    }

    const explicacao = dados.candidates?.[0]?.content?.parts
      ?.map(parte => parte.text || "")
      .join("\n")
      .trim();

    if (!explicacao) {
      return res.status(502).json({
        erro: "A inteligência artificial não retornou uma explicação."
      });
    }

    return res.status(200).json({
      explicacao
    });

  } catch (erro) {
    console.error("Erro no servidor:", erro);

    return res.status(500).json({
      erro: "Ocorreu um erro interno. Tente novamente."
    });
  }
};
