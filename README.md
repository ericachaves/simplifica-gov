# Simplifica Gov

### IA a serviço do cidadão

O **Simplifica Gov** é um projeto que utiliza Inteligência Artificial para tornar informações sobre serviços e programas públicos mais simples, claras e acessíveis.

A proposta é ajudar pessoas a compreender textos burocráticos, facilitando o acesso à informação e promovendo mais autonomia no dia a dia.

## 💡 Sobre o projeto

Muitas informações disponibilizadas pelos órgãos públicos utilizam uma linguagem técnica e burocrática, que pode dificultar a compreensão de uma parcela da população.

O Simplifica Gov nasceu da observação de uma situação real: a dificuldade que minha mãe, uma senhora de 72 anos, enfrenta para compreender informações sobre programas e serviços públicos.

Essa realidade despertou uma reflexão: quantas outras pessoas também dependem de alguém para interpretar informações que deveriam ser acessíveis a todos?

A partir dessa inquietação, surgiu a ideia de desenvolver uma ferramenta que utiliza IA para aproximar a informação do cidadão.

## 🎯 Objetivo

Transformar textos burocráticos fornecidos pelo usuário em explicações mais simples e compreensíveis, preservando informações importantes, como requisitos, prazos, valores e orientações.

Mais do que simplificar textos, o projeto busca promover:

- Autonomia no acesso à informação;
- Inclusão digital;
- Acessibilidade na comunicação;
- Maior compreensão dos serviços públicos.

## ⚙️ Como funciona

1. O usuário acessa a aplicação e insere um texto sobre um serviço ou programa público.
2. O JavaScript envia o conteúdo para o backend.
3. A função no backend valida o texto e encaminha a solicitação à API do Gemini.
4. A Inteligência Artificial interpreta o conteúdo e gera uma explicação em linguagem mais simples.
5. O backend retorna a resposta para a aplicação, que apresenta o resultado ao usuário.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura da aplicação.
- **CSS3:** estilização e apresentação visual.
- **JavaScript:** interatividade e comunicação entre as partes da aplicação.
- **Google Gemini API:** processamento de linguagem natural e geração das explicações.
- **Vercel:** hospedagem da aplicação e execução das funções serverless.

## 🏗️ Arquitetura

O projeto utiliza uma estrutura com frontend e backend separados:

- `index.html`: interface da aplicação.
- `api/explicar.js`: função serverless responsável por receber e validar o texto, realizar a comunicação com a API do Gemini e retornar a explicação.

A chave de acesso à API é armazenada como variável de ambiente na Vercel (`GEMINI_API_KEY`), evitando sua exposição no código público do frontend.

## 🔐 Uso responsável da IA

A aplicação possui instruções para que a IA preserve as informações relevantes do texto original e não invente dados.

O resultado deve ser utilizado como apoio à compreensão. A aplicação não substitui a consulta aos canais oficiais dos órgãos responsáveis, especialmente para confirmar regras, prazos e informações atualizadas.

## 🚀 Próximos passos

O Simplifica Gov é um projeto em evolução. Entre as possibilidades de melhoria estão:

- Aprimorar a experiência e a acessibilidade da interface;
- Ampliar os testes com diferentes tipos de textos;
- Desenvolver mecanismos de identificação das fontes oficiais;
- Explorar futuras integrações com fontes governamentais confiáveis.

## 👩‍💻 Desenvolvido por

**Erica Chaves**

Estudante de Ciência da Computação, com formação técnica em Análise e Desenvolvimento de Sistemas.

GitHub: [@ericachaves](https://github.com/ericachaves)

---

*Simplifica Gov — tecnologia e inteligência artificial para tornar a informação mais acessível a todos.* ❤️
