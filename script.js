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
    alt: "Mizuno", label: "MIZUNO", sub: "Wave Prophecy 14"
  },
  {
    src: "https://thenorthface.vtexassets.com/arquivos/ids/235206-600-0/04062102013C8D-5EX_8.png.png?v=638812004139970000",
    alt: "The North Face", label: " THE NORTH FACE", sub: "Jaqueta Masculina 1996 Retro Nuptse Smokey"
  },
  {
    src: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fliho8ygw5nogbmtcbft/AIR+VAPORMAX+PLUS.png",
    alt: "Nike", label: "NIKE", sub: "Nike Air Vapormax Plus"
  },
  {
    src: "https://shop2gether.fbitsstatic.net/img/p/jaqueta-masculina-puffer-preto-165263/385228-6.jpg?w=1225&h=1633&v=no-value",
    alt: "Asics", label: "ARMANI EXCHANGE", sub: "Jaqueta Masculina Puffer Preto Armani Exchange"
  },
  {
    src: "https://espacocon.fbitsstatic.net/img/p/tenis-nike-air-max-plus-tn-multicolor-dm0032-027-164315/407678-1.jpg?w=1200&h=1200&v=202512301852",
    alt: "Nike", label: "NIKE", sub: "Nike Air Max Plus Tn Multicolor"
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