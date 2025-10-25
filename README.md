# 🎮 Jogo da Velha (Tic-Tac-Toe)

Uma aplicação interativa do clássico Jogo da Velha desenvolvida com React, apresentando uma interface moderna e responsiva com gradientes vibrantes e animações suaves.

## 📋 Descrição do Projeto

Este projeto foi desenvolvido como parte da prática de React, implementando o tradicional jogo da velha com funcionalidades modernas e uma interface visual atraente. O jogo permite que dois jogadores se alternem entre X e O, detecta automaticamente vitórias e empates, e mantém um histórico completo de todas as jogadas.

### ✨ Funcionalidades

- ✅ Jogo da velha totalmente funcional para 2 jogadores
- ✅ Detecção automática de vencedor
- ✅ Detecção de empate
- ✅ Histórico de jogadas com possibilidade de voltar a qualquer momento
- ✅ Botão de reset que limpa o jogo e o histórico
- ✅ Interface responsiva que se adapta a diferentes tamanhos de tela
- ✅ Animações suaves e efeitos hover
- ✅ Status visual diferenciado para jogando, vencedor e empate
- ✅ Emojis para melhor experiência visual

## 🚀 Tecnologias Utilizadas

- **React 18.x** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.x** - Ferramenta de build rápida e moderna
- **JavaScript ES6+** - Linguagem de programação
- **CSS3** - Estilização com gradientes e animações
- **React Hooks** - useState para gerenciamento de estado

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/nati3054/Jogo-Da-Velha.git
cd Jogo-Da-Velha
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

5. **Build para produção** (opcional)
```bash
npm run build
# ou
yarn build
```

## 🎯 Como Jogar

1. O jogo começa com o jogador X
2. Clique em qualquer quadrado vazio para fazer sua jogada
3. Os jogadores se alternam entre X e O
4. O primeiro jogador a formar uma linha (horizontal, vertical ou diagonal) vence
5. Se todos os quadrados forem preenchidos sem vencedor, o jogo empata
6. Use o histórico para voltar a qualquer jogada anterior
7. Clique em "Ir para o início do jogo" para reiniciar completamente

## 📁 Estrutura do Projeto

```
jogo-da-velha/
├── src/
│   ├── components/
│   │   ├── Board.jsx          # Componente do tabuleiro
│   │   ├── Square.jsx          # Componente de cada quadrado
│   │   └── Game.jsx            # Componente principal do jogo
│   ├── App.jsx                 # Componente raiz
│   ├── main.jsx                # Ponto de entrada
│   └── index.css              # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características Visuais

- **Gradiente de fundo**: Combinação de roxo, rosa e azul
- **Cards com glassmorphism**: Efeito de vidro fosco
- **Animações suaves**: Transições em hover e ao ganhar
- **Status dinâmico**: Cores diferentes para cada estado do jogo
- **Sombras e profundidade**: Efeitos 3D nos elementos
- **Scrollbar personalizada**: Design consistente com o tema

## 📚 Principais Aprendizados

Durante o desenvolvimento deste projeto, foram consolidados os seguintes conceitos:

### 1. Componentização
- Divisão da aplicação em componentes reutilizáveis (Square, Board, Game)
- Composição de componentes para criar interfaces complexas
- Separação de responsabilidades entre componentes

### 2. Props e Estado
- Passagem de dados entre componentes via props
- Gerenciamento de estado com `useState`
- Elevação de estado (lifting state up) para compartilhar dados
- Estado imutável e atualização correta

### 3. Manipulação de Eventos
- Handlers de clique nos quadrados
- Funções callback para comunicação entre componentes
- Prevenção de jogadas inválidas

### 4. Renderização Condicional
- Exibição de diferentes mensagens de status
- Desabilitação de quadrados já jogados
- Aplicação de classes CSS condicionais

### 5. Hooks do React
- **useState**: Gerenciamento do histórico e jogada atual
- Atualização de estado baseada no estado anterior
- Arrays e objetos no estado

### 6. Lógica de Jogo
- Implementação do algoritmo de detecção de vencedor
- Verificação de empate
- Sistema de histórico de jogadas
- Navegação temporal (time travel)

### 7. Estilização e UX
- CSS moderno com gradientes e animações
- Responsividade com media queries
- Feedback visual para interações do usuário
- Scrollbar customizada

### 8. Ferramentas Modernas
- Configuração e uso do Vite
- Hot Module Replacement (HMR)
- Build otimizado para produção

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autora

**Natalia Ferreira**

- GitHub: [@nati3054](https://github.com/nati3054)

## 🙏 Agradecimentos

- [Tutorial oficial do React](https://react.dev/learn/tutorial-tic-tac-toe) pela base do projeto
- [Vite](https://vitejs.dev/) pela ferramenta de desenvolvimento
- Comunidade React por todo o suporte e recursos

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

**Desenvolvido com React**