# Carrossel 3D

Um carrossel de imagens interativo com profundidade 3D, desenvolvido para destacar coleções de produtos com uma interface moderna, responsiva e de alta performance.

🌐 **Acesse o Projeto:** -> [https://carrossel-3d.netlify.app/](https://carrossel-3d.netlify.app/)

## ⚡ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica para os elementos de controle e exibição.
* **CSS3 (Advanced):** Utilização de `perspective`, `transform-style: preserve-3d` e animações de brilho (*shimmer*) para criar profundidade e realismo.
* **JavaScript (Vanilla):** Lógica personalizada para manipulação de DOM, cálculos de offset circular e suporte a gestos de toque (*touch events*).

## ✨ Funcionalidades

* **Efeito 3D Realista:** As imagens não apenas deslizam, mas giram e mudam de escala no eixo Z para simular profundidade.
* **Navegação Híbrida:** * Setas de direção (Próximo/Anterior).
    * Indicadores de paginação (Dots) dinâmicos.
    * Navegação por clique direto nos cards laterais.
* **Suporte a Touch:** Implementação de detecção de deslize (*swipe*) para dispositivos móveis.
* **Autoplay Inteligente:** Transição automática de 3.2 segundos que reinicia após a interação do usuário.
* **Design Premium:** Estética voltada para marcas de luxo e lifestyle, com paleta de cores escura e detalhes em neon/azul glaciar.

## 🛠️ Como Funciona o Motor de Posicionamento

A lógica principal reside na função `updateCarousel()`, que aplica classes dinâmicas (`pos-0`, `pos-1`, `pos-2`) baseadas no índice ativo:

- `pos-0`: Card central em destaque (Z-index maior, escala total).
- `pos-1` e `pos-2`: Cards laterais rotacionados no eixo Y para criar o ângulo de visão lateral.
- `pos-hidden`: Cards que não estão visíveis, movidos para o fundo do cenário 3D.

## 📁 Estrutura do Projeto

```text
├── index.html   # Estrutura base e links de recursos
├── style.css    # Estilização, variáveis de cor e efeitos 3D
└── script.js    # Motor de renderização do carrossel e eventos

