Projeto Lugares Favoritos (SPA com React)
Este projeto é uma Single Page Application (SPA) desenvolvida com React que permite aos usuários marcar e gerenciar seus lugares favoritos em um mapa interativo.

Visão Geral
O sistema permite que o usuário:

Visualize sua localização atual em um mapa.

Adicione novos locais favoritos clicando diretamente no mapa.

Salve, visualize, edite e exclua locais (CRUD completo).

Filtre os locais salvos por nome.

Utilize a aplicação em dois idiomas: Português e Inglês.

Toda a persistência de dados é simulada utilizando o Local Storage do navegador, e o roteamento é gerenciado pelo React Router.

Tecnologias Utilizadas
React 18+

Vite como ferramenta de build

React Router Dom para roteamento

React Leaflet para o mapa interativo (baseado em OpenStreetMap)

Tailwind CSS para estilização responsiva

i18next para internacionalização (i18n)

React Hook Form para validação de formulários

Funcionalidades
Mapa Interativo: Exibe a localização do usuário e os marcadores dos locais favoritos.

CRUD de Locais:

Create: Adiciona um novo local clicando no mapa, com nome e descrição.

Read: Lista todos os locais salvos com um filtro de busca.

Update: Edita as informações de um local existente.

Delete: Remove um local da lista.

Responsividade: A interface se adapta a diferentes tamanhos de tela (mobile e desktop).

Internacionalização (i18n): Suporte para Português (pt-BR) e Inglês (en-US), com um seletor de idioma funcional.

Validação de Formulários: Campos de nome e descrição são validados.

Instalação e Execução
Pré-requisitos
Node.js (versão 18 ou superior)

npm ou yarn

Passos
Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências:

npm install

Execute o projeto em modo de desenvolvimento:

npm run dev

A aplicação estará disponível em http://localhost:5173.

Estrutura do Projeto
O projeto é organizado na seguinte estrutura de pastas:

/src
├── api/          # Simulação do backend (localStorage)
├── components/   # Componentes reutilizáveis
├── context/      # Contexto React para estado global
├── hooks/        # Hooks customizados
├── i18n/         # Configuração de internacionalização
├── pages/        # Componentes de página
├── routes/       # Definição das rotas
├── styles/       # Estilos globais
├── utils/        # Funções utilitárias (validação)
├── App.jsx       # Componente raiz
└── main.jsx      # Ponto de entrada da aplicação

