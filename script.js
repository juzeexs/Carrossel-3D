    const images = [
      {
        src: "https://hurley.com.br/cdn/shop/files/HYBM010356_MARINHO_02_2.jpg?v=1757339899",
        alt: "Hurley", label: "HURLEY", sub: "Coleção Verão"
      },
      {
        src: "https://assets2.oakley.com/cdn-record-files-pi/321b72e2-8e98-4183-93ec-b22c0160d590/c2b9a7c5-fa67-4913-a55b-b2a70089be7e/0OO9208__9208G2__PREMIUM__shad__adv2.png?impolicy=OO_ratio&width=3000",
        alt: "Oakley", label: "OAKLEY", sub: "Linha Premium"
      },
      {
        src: "https://quiksilver.vtexassets.com/arquivos/ids/410985/Mochila-Quiksilver-Esportiva-Quiksilver-H02-Preto-Preto-U.jpg?v=639051152732370000",
        alt: "Quiksilver", label: "QUIKSILVER", sub: "Mochila Esportiva"
      },
      {
        src: "https://blog.wtennis.com.br/wp-content/uploads/2024/12/World-Tennis-tenis-Mizuno-Wave-Prophecy-14-masculino-azul.jpg",
        alt: "Quiksilver", label: "Mizuno", sub: "Mizuno Prophecy 14"
      }
    ];

    let active = 0;
    let autoplayTimer;
    const total = images.length;
    const scene = document.getElementById('scene');
    const dotsContainer = document.getElementById('dots');

    const cards = images.map((img, i) => {
      const card = document.createElement('div');
      card.className = 'card';

      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.alt;

      const label = document.createElement('div');
      label.className = 'card-label';
      label.innerHTML = `<span class="sub">${img.sub}</span><span class="nome">${img.label}</span>`;

      card.appendChild(image);
      card.appendChild(label);
      card.addEventListener('click', () => { if (i !== active) goTo(i); });
      scene.appendChild(card);
      return card;
    });

    const dots = images.map((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
      return dot;
    });

    function updateCarousel() {
      cards.forEach((card, i) => {
        const offset = (i - active + total) % total;
        card.className = 'card';
        if (offset === 0) card.classList.add('pos-0');
        else if (offset === 1) card.classList.add('pos-1');
        else if (offset === total - 1) card.classList.add('pos-2');
        else card.classList.add('pos-hidden');
      });

      dots.forEach((dot, i) => {
        dot.className = 'dot' + (i === active ? ' active' : '');
      });
    }

    function goTo(index) {
      active = (index + total) % total;
      updateCarousel();
    }

    function next() { goTo(active + 1); }
    function prev() { goTo(active - 1); }

    function startAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, 3200);
    }

    document.getElementById('btnNext').addEventListener('click', () => { next(); startAutoplay(); });
    document.getElementById('btnPrev').addEventListener('click', () => { prev(); startAutoplay(); });

    let startX = 0;
    scene.addEventListener('touchstart', e => { startX = e.touches[0].clientX; clearInterval(autoplayTimer); });
    scene.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (diff > 40) next();
      else if (diff < -40) prev();
      startAutoplay();
    });

    updateCarousel();
    startAutoplay();