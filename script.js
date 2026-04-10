const WHATSAPP_NUMBER = '5562992789896';

const products = [
  {
    id: 1,
    name: "Cálcio MDK",
    category: "Cápsulas",
    type: "jar",
    color: ["#edf6ea", "#d4e8c9"],
    description: "Reposição diária de cálcio, magnésio, vitamina D e K2.",
    image: "images/calcio-mdk.jpeg",
    detailDescription:
      "Suplemento vitamínico e mineral indicado para repor as necessidades diárias de cálcio, magnésio, vitaminas D e K2, essenciais para garantir o bom funcionamento do organismo.",
    highlights: ["Cálcio", "Magnésio", "Vitaminas D e K2"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: reposição nutricional diária.",
      "Destaque comercial: combinação de cálcio, magnésio, D e K2 na mesma fórmula.",
      "Cálcio",
      "Ajuda na formação e manutenção de ossos e dentes, coagulação do sangue, contração muscular e impulsos nervosos.",
      "Magnésio",
      "Essencial na transmissão e atividade neuromuscular, mineralização do osso e funcionamento do hormônio da tireoide. Favorece o transporte de oxigênio, a contração muscular e melhora a performance durante o exercício físico.",
      "Vitamina D",
      "Atua na absorção de cálcio e fósforo, prevenindo problemas ósseos e fraturas.",
      "Vitamina K2",
      "Está relacionada à coagulação, transporte e fixação de cálcio."
    ],
    metaTags: ["Saúde óssea", "Uso diário", "Fórmula completa"],
    brandBadges: ["Suplemento vitamínico", "Minerais essenciais"]
  },
  {
    id: 2,
    name: "Ácido Hialurônico",
    category: "Cápsulas",
    type: "pouch",
    color: ["#f3f0e7", "#dfd9c5"],
    description: "Cuidado com a pele e suporte para as articulações.",
    image: "images/acido-hialuronico.jpeg",
    detailDescription:
      "Produto apresentado como aliado para evitar sinais de envelhecimento, promover a regeneração da pele, reduzir rugas e manchas, aliviar dores articulares e melhorar a lubrificação das articulações.",
    highlights: ["Pele", "Articulações", "Regeneração"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: estética e mobilidade articular.",
      "Destaque comercial: formulação voltada para hidratação, elasticidade e conforto das articulações.",
      "PRA QUE SERVE:",
      "O ácido hialurônico é uma substância presente no líquido sinovial, que é responsável pela lubrificação das articulações, humor vítreo, que mantém a forma do olho, e colágeno, que é um dos principais constituintes da pele.",
      "Assim, o uso do ácido hialurônico em cápsulas pode servir para:",
      "Evitar o surgimento de sinais de envelhecimento;",
      "Promover a regeneração da pele, reduzindo as rugas e manchas;",
      "Aliviar dores articulares, melhorando a lubrificação das articulações;",
      "Evitar o desenvolvimento de osteoartrite, osteodistrofia ou artrite reumatoide."
    ],
    metaTags: ["Anti-idade", "Beleza", "Uso versátil"],
    brandBadges: ["Pele e articulações", "Cuidado diário"]
  },
  {
    id: 3,
    name: "Amora",
    category: "Cápsulas",
    type: "capsules",
    color: ["#eef5ea", "#d6e4cb"],
    description: "Suplemento em cápsulas com amora e vitamina E.",
    image: "images/amora.jpeg",
    detailDescription:
      "Produto apresentado com foco em regulação hormonal, acne e menopausa, em uma formulação alimentar em cápsulas com amora e vitamina E.",
    highlights: ["Regulação hormonal", "Menopausa", "Vitamina E"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: rotina feminina e equilíbrio hormonal.",
      "Destaque comercial: amora associada à vitamina E.",
      "BENEFÍCIOS:",
      "Essa fruta tem sido conhecida por sua ação refrescante, anti-inflamatória, emoliente e antibacteriana.",
      "Além de poder ser usada no tratamento da acne e erupções cutâneas, tem uma ação antioxidante devido à presença do ácido elágico e também é rica em cálcio, sendo muito usada para o tratamento da osteoporose.",
      "Contudo, nos dias de hoje, o principal benefício da amora está na regulação dos hormônios.",
      "Desta forma, além de poder tratar irritação, ansiedade, nervosismo, memória fraca, dores musculares e nas articulações, atua com grande eficácia nos sintomas da menopausa.",
      "Melhora os sintomas da menopausa, a qualidade do sono, auxilia em reumatismo, gota e artrite, trata a osteoporose, é hipoglicemiante, antidiarreica, cicatrizante e ajuda na ansiedade, irritação e suores frios."
    ],
    metaTags: ["Feminino", "Equilíbrio", "Uso diário"],
    brandBadges: ["Linha feminina", "Bem-estar"]
  },
  {
    id: 4,
    name: "Óleo de Alho",
    category: "Cápsulas",
    type: "jar",
    color: ["#f4eee7", "#eadccf"],
    description: "Imunidade, circulação e suporte para a rotina diária.",
    image: "images/oleo-de-alho.jpeg",
    detailDescription:
      "O óleo de alho é apresentado como antibiótico natural, indicado tradicionalmente para bronquite crônica, circulação, colesterol, gripes, resfriados, infecções, reumatismo e gota.",
    highlights: ["Imunidade", "Circulação", "Colesterol"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: defesa do organismo e circulação.",
      "Destaque comercial: apelo tradicional do alho como suporte natural.",
      "Imunidade, circulação, colesterol.",
      "O óleo de alho é um antibiótico natural, muito indicado na cura de bronquite crônica, hipertensão arterial e verme.",
      "É preventivo contra gripe, resfriados, infecções, reumatismo e gota.",
      "O alho tem em sua composição uma série de vitaminas: A, B1, B2, C, B3 e minerais: cálcio, enxofre, iodo, magnésio, selênio, potássio, sódio e zinco.",
      "Além da poderosa e conhecida ação contra a pressão alta, o óleo de alho é eficaz no combate à gripe e resfriado, atuando rapidamente contra bronquite, tosses crônicas, coqueluche e outras afecções respiratórias.",
      "O óleo de alho pode apresentar ação antioxidante, que auxilia a combater os radicais livres e o envelhecimento.",
      "Ele também é hipocolesterolêmico, pois impede que o colesterol se fixe na parede dos vasos sanguíneos, diminuindo as chances de formação de placas ateromas.",
      "O óleo de alho tem a capacidade de diminuir a gordura, em especial o LDL ou colesterol ruim."
    ],
    metaTags: ["Natural", "Rotina funcional", "Uso tradicional"],
    brandBadges: ["Extrato funcional", "Uso objetivo"]
  },
  {
    id: 5,
    name: "Magnésio",
    category: "Cápsulas",
    type: "pouch",
    color: ["#eef4e5", "#d9e9c8"],
    description: "Suporte para TPM, ansiedade, insônia e cefaleias.",
    image: "images/magnesio.jpeg",
    detailDescription:
      "Produto apresentado como eficaz para TPM, artrite, insônia, ansiedade, RINS e enxaqueca (cefaleias), com comunicação forte para relaxamento e rotina diária.",
    highlights: ["TPM", "Ansiedade", "Sono"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: relaxamento, equilíbrio e rotina mineral.",
      "Destaque comercial: forte associação com bem-estar e descanso.",
      "Artrite, insônia, ansiedade, rins e enxaqueca (cefaleias).",
      "Aproximadamente 30% do magnésio existente no indivíduo adulto está nos músculos e 60% no esqueleto.",
      "Existem mais de 300 enzimas diferentes, distribuídas pelo organismo, que são ativadas pelo magnésio, o que evidencia a sua importância no metabolismo humano.",
      "Eficaz para: insônia, obesidade, enxaqueca, TPM, instabilidade emocional, depressão, apatia, raiva, nervosismo, ansiedade, epilepsia, pedras nos rins, insuficiência cardíaca congestiva, fadiga crônica, pressão arterial alta (hipertensão), constipação, diabetes, cãibras musculares, osteoporose, artrite, artrose, problemas de memória, ruído sensibilidade, dormência, formigamento, tiques nervosos, transpiração excessiva, anorexia, asma e envelhecimento acelerado."
    ],
    metaTags: ["Mineral essencial", "Rotina diária", "Bem-estar"],
    brandBadges: ["Relaxamento", "Uso diário"]
  },
  {
    id: 6,
    name: "Melatonina",
    category: "Cápsulas",
    type: "capsules",
    color: ["#eef3ec", "#dbe5d8"],
    description: "Auxilia na qualidade do sono e no equilíbrio do ciclo sono-vigília.",
    image: "images/melatonina.jpeg",
    detailDescription:
      "A melatonina é apresentada como hormônio produzido naturalmente pelo organismo, com principal função de estimular o sono, além de contribuir para o bom funcionamento do organismo e o equilíbrio do ciclo de sono e vigília.",
    highlights: ["Sono", "Rotina noturna", "Equilíbrio"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: qualidade do sono.",
      "Destaque comercial: apoio ao ciclo sono-vigília e rotina de descanso.",
      "BENEFÍCIOS:",
      "A melatonina é um hormônio produzido naturalmente pelo organismo, possui como principal função estimular o sono.",
      "Além disso, a melatonina promove também o bom funcionamento do organismo e atua como um antioxidante natural.",
      "Quando associada com o magnésio e as vitaminas do complexo B, estes suplementos atuam restaurando e melhorando a qualidade dos neurotransmissores cerebrais, estimulando as reações ligadas à hora de ir dormir e promovendo o equilíbrio do nosso ciclo de sono e vigília."
    ],
    metaTags: ["Dormir melhor", "Noite", "Uso prático"],
    brandBadges: ["Sono", "Rotina noturna"]
  },
  {
    id: 7,
    name: "Própolis, Menta e Gengibre",
    category: "Extratos",
    type: "jar",
    color: ["#f4f0e3", "#e7d7b0"],
    description: "Composto de mel e extratos naturais para irritação da garganta.",
    image: "images/propolis-menta-gengibre.jpeg",
    detailDescription:
      "Composto de mel e extrato de própolis, gengibre, romã e menta, apresentado para ajudar na diminuição da irritação da garganta e proporcionar alívio imediato.",
    highlights: ["Própolis", "Menta", "Gengibre"],
    additionalInfo: [
      "Categoria: Extratos.",
      "Foco principal: garganta e sensação de alívio.",
      "Destaque comercial: combinação de mel, própolis, gengibre, romã e menta.",
      "BENEFÍCIOS:",
      "O composto de mel e extrato de própolis, gengibre, romã e menta ajuda na diminuição da irritação da garganta, além de proporcionar alívio imediato.",
      "Também ajuda no combate aos sintomas da gripe e resfriado, minimizando a rouquidão e tratando inflamações na boca, garganta, aftas e afecções de laringe e faringe."
    ],
    metaTags: ["Garganta", "Alívio rápido", "Composto natural"],
    brandBadges: ["Extrato funcional", "Sabor gengibre, romã e menta"]
  },
  {
    id: 8,
    name: "Licopeno de Tomate com Selênio",
    category: "Cápsulas",
    type: "pouch",
    color: ["#eef6ef", "#d7e8d8"],
    description: "Suporte antioxidante com foco em saúde masculina.",
    image: "images/licopeno-tomate-selenio.jpeg",
    detailDescription:
      "Produto apresentado como poderoso e eficaz na prevenção de doenças da próstata, unindo licopeno de tomate com selênio em uma proposta funcional para rotina masculina.",
    highlights: ["Licopeno", "Selênio", "Saúde masculina"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: rotina masculina e ação antioxidante.",
      "Destaque comercial: licopeno de tomate associado ao selênio.",
      "Poderoso e eficaz na prevenção de doenças da próstata.",
      "O Licopeno de Tomate com Selênio possui ação antioxidante e protetora celular, além de auxiliar na manutenção da saúde da próstata que, combinado com o selênio, um poderoso mineral antioxidante, torna-se excelente no combate dos radicais livres.",
      "O licopeno é um carotenoide com propriedades antioxidantes e protetoras contra UV.",
      "Pode ser usado para neutralizar radicais livres, exercendo um efeito preventivo contra os riscos do câncer.",
      "O selênio, além de fortalecer nosso sistema imunológico, ajuda na perda de peso, pois é importante para o bom funcionamento da tireoide.",
      "Além disso, sua ação antioxidante reduz o surgimento de doenças causadas pelo metabolismo lento e por substâncias inflamatórias."
    ],
    metaTags: ["Masculino", "Antioxidante", "Uso diário"],
    brandBadges: ["Saúde masculina", "Fórmula funcional"]
  },
  {
    id: 9,
    name: "Óleo de Semente de Uva",
    category: "Cápsulas",
    type: "capsules",
    color: ["#eaf3e4", "#cadec5"],
    description: "Óleo vegetal com propriedades medicinais e antioxidantes.",
    image: "images/oleo-semente-uva.jpeg",
    detailDescription:
      "Produto apresentado com destaque para as propriedades medicinais do óleo vegetal de semente de uva, com apelo funcional e uso cotidiano.",
    highlights: ["Óleo vegetal", "Antioxidante", "Propriedades medicinais"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: cuidado natural e antioxidante.",
      "Destaque comercial: apelo medicinal do óleo de semente de uva.",
      "Propriedades medicinais do óleo vegetal de semente de uva.",
      "Possui alto índice de ácido linoleico (mais conhecido como ômega 3).",
      "Muito rico em tocoferol (vitamina E antioxidante).",
      "Contém bastante clorofila.",
      "Rico em vitaminas A, B e C.",
      "Contém grande quantidade de antioxidante OPC, conhecido por ajudar a prevenir o envelhecimento das células e doenças degenerativas como mal de Alzheimer e mal de Parkinson.",
      "Possui propriedades anticancerígenas, anti-inflamatórias e antialérgicas, devido à presença de flavonoides.",
      "Pode ser considerado um anti-histamínico natural. (AÇÃO ANTIALÉRGICA)",
      "Possui resveratrol com potencial para queimar calorias, contribuir para o rejuvenescimento e melhorar a saúde do coração.",
      "Rico em betacaroteno, ajuda a combater envelhecimento precoce e colabora na preservação do colágeno."
    ],
    metaTags: ["Natural", "Extrato", "Bem-estar"],
    brandBadges: ["Óleo vegetal", "Uso funcional"]
  },
  {
    id: 10,
    name: "Coenzima Q10",
    category: "Cápsulas",
    type: "jar",
    color: ["#eef2f2", "#dce3e3"],
    description: "Energia celular e melhor aproveitamento do oxigênio.",
    image: "images/coenzima-q10.jpeg",
    detailDescription:
      "Produto apresentado para combater o envelhecimento por possuir a capacidade de melhorar o estado de energia das células e aumentar a eficiência da utilização do oxigênio.",
    highlights: ["Energia celular", "Oxigênio", "Vitalidade"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: vitalidade e energia.",
      "Destaque comercial: ação ligada à energia celular e ao envelhecimento.",
      "BENEFÍCIOS:",
      "Combate o envelhecimento por possuir a capacidade de melhorar o estado de energia das células e aumentar a eficiência da utilização do oxigênio.",
      "Ação antioxidante além de oferecer efeito anti-inflamatório.",
      "Auxilia na prevenção de doenças cardíacas e melhora distúrbios cardiovasculares como a hipertensão arterial.",
      "Auxilia na estimulação do sistema imunológico e neutraliza os radicais livres.",
      "Importante suplemento para dar mais energia e resistência muscular.",
      "Contribui para redução do colesterol ruim.",
      "Contribui para a redução e controle da diabetes.",
      "Contribui para dar aquele gás na prática de exercícios físicos, potencializando os resultados positivos do emagrecimento."
    ],
    metaTags: ["Performance", "Vitalidade", "Premium"],
    brandBadges: ["Tecnologia avançada", "Rotina premium"]
  },
  {
    id: 11,
    name: "Óleo de Prímula",
    category: "Cápsulas",
    type: "pouch",
    color: ["#edf6ea", "#d4e8c9"],
    description: "Óleo de prímula com foco em regulação hormonal e fertilidade.",
    image: "images/oleo-primula.jpeg",
    detailDescription:
      "Produto composto pelo óleo das sementes da prímula, cujo principal componente é o ácido graxo essencial gama-linolênico, com comunicação voltada para regulação hormonal, fertilidade, TPM e menopausa.",
    highlights: ["Regulação hormonal", "TPM", "Menopausa"],
    additionalInfo: [
      "Categoria: Cápsulas.",
      "Foco principal: equilíbrio hormonal feminino.",
      "Destaque comercial: óleo de prímula rico em ácido gama-linolênico.",
      "Regulação hormonal, fertilidade, TPM, menopausa.",
      "O produto é composto pelo óleo das sementes da prímula, cujo principal componente é o ácido graxo essencial gama-linolênico.",
      "Além de fazer parte da estrutura das membranas celulares, é uma substância que equilibra os hormônios femininos, diminuindo os impactos da TPM, artrite, reumatismo, dor no peito, diabetes e menopausa."
    ],
    metaTags: ["Feminino", "Equilíbrio", "Uso diário"],
    brandBadges: ["Linha feminina", "Óleo funcional"]
  }
];

const state = {
  category: 'Todos',
  search: '',
  cart: [],
  activePage: 'inicio'
};

const elements = {
  productsGrid: document.getElementById('productsGrid'),
  filterPills: document.getElementById('filterPills'),
  searchInput: document.getElementById('searchInput'),
  cartDrawer: document.getElementById('cartDrawer'),
  overlay: document.getElementById('overlay'),
  openCartBtn: document.getElementById('openCartBtn'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartItems: document.getElementById('cartItems'),
  cartCount: document.getElementById('cartCount'),
  checkoutWhatsAppBtn: document.getElementById('checkoutWhatsAppBtn'),
  productDetailPage: document.getElementById('productDetailPage'),
  productDetailContent: document.getElementById('productDetailContent'),
  detailBackBtn: document.getElementById('detailBackBtn'),
  detailCloseBtn: document.getElementById('detailCloseBtn'),
  pageSections: document.querySelectorAll('[data-page-section]'),
  navLinks: document.querySelectorAll('.nav-link'),
  navButtons: document.querySelectorAll('.nav-button')
};

const categories = ['Todos', ...new Set(products.map((product) => product.category))];

function renderFilters() {
  elements.filterPills.innerHTML = categories
    .map((category) => `
      <button class="filter-pill ${state.category === category ? 'active' : ''}" data-category="${category}">
        ${category}
      </button>
    `)
    .join('');
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatch = state.category === 'Todos' || product.category === state.category;
    const searchMatch = `${product.name} ${product.category} ${product.description}`
      .toLowerCase()
      .includes(state.search.toLowerCase());

    return categoryMatch && searchMatch;
  });
}

function getProductVisual(type, image, name, options = {}) {
  const { eager = false } = options;

  if (image && image.trim()) {
    return `
      <img
        src="${image}"
        alt="${name}"
        class="product-image-real"
        loading="${eager ? 'eager' : 'lazy'}"
        decoding="async"
        fetchpriority="${eager ? 'high' : 'auto'}"
        width="600"
        height="600"
        draggable="false"
        onerror="this.onerror=null; this.closest('.product-visual, .product-detail-visual')?.classList.add('image-fallback'); this.remove();"
      >
    `;
  }

  if (type === 'capsules') {
    return '<div class="product-capsules"><span></span><span></span><span></span></div>';
  }

  if (type === 'pouch') {
    return '<div class="product-pouch"></div>';
  }

  return '<div class="product-jar"></div>';
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getProductBenefits(product) {
  return Array.isArray(product.highlights) && product.highlights.length
    ? product.highlights
    : ['Bem-estar', 'Qualidade', 'Praticidade'];
}

function getProductLongDescription(product) {
  return product.detailDescription || product.description;
}

function getProductNotes(product) {
  return Array.isArray(product.additionalInfo) && product.additionalInfo.length
    ? product.additionalInfo
    : [`Categoria: ${product.category}.`];
}

function getProductMetaTags(product) {
  return Array.isArray(product.metaTags) && product.metaTags.length ? product.metaTags : [];
}

function getProductBadges(product) {
  return Array.isArray(product.brandBadges) && product.brandBadges.length
    ? product.brandBadges
    : ['Produto específico', 'Linha premium'];
}

function setActivePage(pageId, updateHash = true) {
  const pageExists = Array.from(elements.pageSections).some((section) => section.dataset.pageSection === pageId);
  const nextPage = pageExists ? pageId : 'inicio';

  state.activePage = nextPage;

  elements.pageSections.forEach((section) => {
    const isActive = section.dataset.pageSection === nextPage;
    section.classList.toggle('active', isActive);
    section.hidden = !isActive;

    if (isActive) {
      const scrollArea = section.querySelector('.page-scroll');
      if (scrollArea) scrollArea.scrollTop = 0;
    }
  });

  elements.navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === nextPage);
  });

  if (updateHash) {
    history.replaceState(null, '', `#${nextPage}`);
  }
}

function openProductPageFromAction(pageId) {
  setActivePage(pageId);
  closeCart();
}

function openProductDetail(productId) {
  const product = getProductById(productId);

  if (!product || !elements.productDetailPage || !elements.productDetailContent) return;

  const benefits = getProductBenefits(product);
  const notes = getProductNotes(product);
  const notesBullets = notes.slice(0, 3);
  const notesText = notes.slice(3);
  const metaTags = getProductMetaTags(product);
  const badges = getProductBadges(product);
  const visual = getProductVisual(product.type, product.image, product.name, { eager: true });

  elements.productDetailContent.innerHTML = `
    <div class="product-detail-visual-wrap">
      <div class="product-detail-visual">${visual}</div>
    </div>

    <div class="product-detail-content">
      <div class="product-detail-badges">
        ${badges.map((badge) => `<span class="product-detail-badge">${badge}</span>`).join('')}
      </div>

      <div>
        <h2 class="product-detail-title">${product.name}</h2>
      </div>

      <p class="product-detail-description">${getProductLongDescription(product)}</p>

      <div class="product-detail-benefits">
        ${benefits.map((benefit) => `<span class="product-detail-benefit">${benefit}</span>`).join('')}
      </div>

      <div class="product-detail-section">
        <strong>Informações adicionais</strong>

        <div class="product-detail-note">
          <ul class="product-detail-note-list">
            ${notesBullets.map((note) => `<li>${note}</li>`).join('')}
          </ul>

          <div class="product-detail-note-text">
            ${notesText.map((note) => {
              const isHeading =
                /^[A-ZÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇ0-9 ,():-]{3,}$/.test(note) ||
                /:$/.test(note) ||
                ['Cálcio', 'Magnésio', 'Vitamina D', 'Vitamina K2'].includes(note);

              return `<p class="${isHeading ? 'note-heading' : ''}">${note}</p>`;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="product-detail-meta">
        ${metaTags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>

      <div class="product-detail-actions">
        <button class="btn btn-primary product-detail-add" id="detailAddToCartBtn" data-id="${product.id}">
          Adicionar ao carrinho
        </button>

        <span class="product-detail-mini">
          Ao clicar em "Adicionar ao carrinho", o produto será adicionado ao carrinho automaticamente.
        </span>
      </div>
    </div>
  `;

  elements.productDetailPage.classList.add('active');
  elements.productDetailPage.setAttribute('aria-hidden', 'false');
  document.body.classList.add('body-detail-open');

  const detailAddBtn = document.getElementById('detailAddToCartBtn');
  if (detailAddBtn) {
    detailAddBtn.addEventListener('click', () => addToCart(product.id));
  }
}

function closeProductDetail() {
  if (!elements.productDetailPage) return;
  elements.productDetailPage.classList.remove('active');
  elements.productDetailPage.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('body-detail-open');
}

function renderProducts() {
  const filtered = getFilteredProducts();

  if (!filtered.length) {
    elements.productsGrid.innerHTML = `
      <article class="product-card" style="grid-column: 1 / -1; text-align:center; padding: 34px; cursor: default;">
        <h3 style="margin-top:0;">Nenhum produto encontrado.</h3>
        <p class="product-description" style="margin-bottom:0;">Tente outro termo de busca ou selecione outra categoria.</p>
      </article>
    `;
    return;
  }

  elements.productsGrid.innerHTML = filtered
    .map((product, index) => `
      <article class="product-card" data-id="${product.id}" tabindex="0" role="button" aria-label="Abrir detalhes de ${product.name}">
        <div class="product-visual">
          ${getProductVisual(product.type, product.image, product.name, { eager: index < 6 })}
        </div>

        <div class="product-meta">
          <div>
            <small>${product.category}</small>
            <h3 class="product-name">${product.name}</h3>
          </div>
        </div>

        <p class="product-description">${product.description}</p>

        <div class="product-footer">
          <span class="product-tag">Natural</span>
          <button class="add-to-cart" data-id="${product.id}">Adicionar</button>
        </div>
      </article>
    `)
    .join('');
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find((item) => item.id === productId);
    state.cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

function updateQuantity(productId, amount) {
  const item = state.cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((product) => product.id !== productId);
  }

  renderCart();
}

function removeItem(productId) {
  state.cart = state.cart.filter((product) => product.id !== productId);
  renderCart();
}

function renderCart() {
  const itemCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  elements.cartCount.textContent = itemCount;

  if (!state.cart.length) {
    elements.cartItems.innerHTML = `
      <div class="cart-empty">
        <div>
          <strong>Seu carrinho está vazio.</strong>
          <p>Adicione produtos para montar o pedido.</p>
        </div>
      </div>
    `;
    return;
  }

  elements.cartItems.innerHTML = state.cart
    .map((item) => `
      <article class="cart-item">
        <div class="cart-item-main">
          <div class="cart-item-visual"></div>

          <div class="cart-item-info">
            <small>${item.category}</small>
            <strong>${item.name}</strong>

            <div class="cart-item-controls">
              <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
              <button class="remove-btn" data-action="remove" data-id="${item.id}">Remover</button>
            </div>
          </div>
        </div>
      </article>
    `)
    .join('');
}

function generateWhatsAppMessage() {
  if (!state.cart.length) {
    alert('Adicione pelo menos um produto ao carrinho para finalizar o pedido.');
    return;
  }

  const cartLines = state.cart.map((item) => {
    const unitLabel = item.quantity > 1 ? 'unidades' : 'unidade';
    return `• ${item.name} — ${item.quantity} ${unitLabel}`;
  });

  const lines = [
    'Olá! Tudo bem?',
    '',
    'Acabei de montar meu pedido pelo site:',
    '',
    '🛒 Itens selecionados:',
    ...cartLines,
    '',
    'Poderia me informar os valores, formas de pagamento e opções de entrega?',
    'Obrigado!'
  ];

  const message = encodeURIComponent(lines.join('\n'));
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`;
  window.location.href = url;
}

function openCart() {
  elements.cartDrawer.classList.add('active');
  elements.overlay.classList.add('active');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  elements.cartDrawer.classList.remove('active');
  elements.overlay.classList.remove('active');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
}

function bindEvents() {
  elements.filterPills.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;

    state.category = button.dataset.category;
    renderFilters();
    renderProducts();
  });

  elements.searchInput.addEventListener('input', (event) => {
    state.search = event.target.value.trim();
    renderProducts();
  });

  elements.productsGrid.addEventListener('click', (event) => {
    const button = event.target.closest('.add-to-cart');

    if (button) {
      event.stopPropagation();
      addToCart(Number(button.dataset.id));
      return;
    }

    const card = event.target.closest('.product-card[data-id]');
    if (!card) return;

    openProductDetail(Number(card.dataset.id));
  });

  elements.productsGrid.addEventListener('keydown', (event) => {
    const card = event.target.closest('.product-card[data-id]');
    const isActionKey = event.key === 'Enter' || event.key === ' ';

    if (!card || !isActionKey) return;
    if (event.target.closest('.add-to-cart')) return;

    event.preventDefault();
    openProductDetail(Number(card.dataset.id));
  });

  elements.cartItems.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const productId = Number(target.dataset.id);
    const action = target.dataset.action;

    if (action === 'increase') updateQuantity(productId, 1);
    if (action === 'decrease') updateQuantity(productId, -1);
    if (action === 'remove') removeItem(productId);
  });

  elements.openCartBtn.addEventListener('click', openCart);
  elements.closeCartBtn.addEventListener('click', closeCart);
  elements.overlay.addEventListener('click', closeCart);
  elements.checkoutWhatsAppBtn.addEventListener('click', generateWhatsAppMessage);

  elements.detailBackBtn.addEventListener('click', closeProductDetail);
  elements.detailCloseBtn.addEventListener('click', closeProductDetail);

  elements.productDetailPage.addEventListener('click', (event) => {
    if (event.target === elements.productDetailPage) closeProductDetail();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeCart();
      closeProductDetail();
    }
  });

  elements.navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pageId = link.dataset.page || 'inicio';
      setActivePage(pageId);
      closeProductDetail();
    });
  });

  elements.navButtons.forEach((button) => {
    button.addEventListener('click', () => openProductPageFromAction(button.dataset.page || 'inicio'));
  });

  window.addEventListener('hashchange', () => {
    const hashPage = window.location.hash.replace('#', '');
    setActivePage(hashPage || 'inicio', false);
  });
}

function init() {
  renderFilters();
  renderProducts();
  renderCart();
  bindEvents();

  const initialHash = window.location.hash.replace('#', '');
  setActivePage(initialHash || 'inicio', false);
}

init();
