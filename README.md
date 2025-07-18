# 🦷 Clínica Dentes Saudáveis

Um site institucional moderno e responsivo para uma clínica odontológica, desenvolvido com React. O foco está em apresentar os serviços, transmitir confiança e facilitar o contato com pacientes.

🔗 **Acesse aqui**: [clinicadentessaudaveis.netlify.app](https://clinicadentessaudaveis.netlify.app)

---

## ✨ Funcionalidades

-   Navegação tipo SPA (Single Page Application)
-   Lista de especialidades odontológicas
-   Benefícios do uso de aparelhos
-   Depoimentos de clientes
-   Contato com WhatsApp, telefone e endereço
-   Mapa integrado via Google Maps (iframe)
-   Deploy contínuo via Netlify

---

## 💻 Tecnologias utilizadas

| Tecnologia       | Descrição                                 |
| ---------------- | ----------------------------------------- |
| React            | Biblioteca principal de construção da UI  |
| React Router DOM | Roteamento interno e navegação SPA        |
| React Icons      | Ícones estilizados de fácil integração    |
| CSS puro         | Estilização responsiva e personalizada    |
| Netlify          | Deploy automatizado e hospedagem gratuita |

---

## 🚀 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/cleitoncfs/clinica-dentes-saudaveis.git
cd clinica-dentes-saudaveis

# Instale as dependências
npm install

# Rode o projeto
npm start

⚠️ Se estiver usando Node.js 17+ ou 20+, use: set NODE_OPTIONS=--openssl-legacy-provider && npm start (Windows)

🏗️ Deploy (Netlify)
Este projeto está pronto para deploy automático com as seguintes configurações:

netlify.toml:

[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_OPTIONS = "--openssl-legacy-provider"


📁 Estrutura do projeto
📁 public/
 ┣ index.html
 ┣ dente.png
📁 src/
 ┣ App.js
 ┣ index.js
 ┗ estilos (CSS)

📄 package.json
📄 netlify.toml
📄 README.md

👨‍💻 Autor
Desenvolvido com 💙 por Cleiton Santos

📜 Licença
Este projeto é livre para uso educacional. Para uso comercial, consulte o autor.

---

```
