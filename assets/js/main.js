/**
* Template Name: Strategy
* Template URL: https://bootstrapmade.com/strategy-bootstrap-agency-template/
* Updated: Jun 06 2025 with Bootstrap v5.3.6
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
const translations = {
  ro: {
    meta_title: "Renovare apartamente și băi la cheie",
    meta_description: "Renovare profesională a apartamentelor și băilor la cheie în Chișinău. Materiale de calitate, tehnologii moderne și abordare individuală.",
    meta_keywords: "renovare apartamente, renovare băi, la cheie, design interior",
    title: "Renovare",
    nav_home: "Acasă",
    nav_about: "Despre Noi",
    nav_services: "Servicii",
    nav_portfolio: "Portofoliu",
    nav_contact: "Contacte",
    nav_getstarted: "Contactați-ne",
    lang_ro: "Română",
    lang_ru: "Русский",
    lang_en: "English",
    hero_agency: "AGENȚIA NOASTRĂ",
    hero_title: "RENOVARE LA CHEIE",
    hero_text: "Creăm spații moderne și confortabile pentru casa ta. Echipa noastră transformă ideile tale în realitate, folosind materiale de calitate și tehnologii avansate pentru renovarea apartamentelor și băilor.",
    hero_button: "AFLĂ DESPRE SERVICII",
    hero_stats: "Proiecte finalizate",
    about_title: "Despre Noi",
    about_subtitle_1: "Află",
    about_subtitle_2: "mai multe despre noi",
    about_heading: "Renovare de calitate pentru casa ta",
    about_lead: "Creăm soluții individuale pentru renovarea apartamentelor și băilor, asigurând confort și stil.",
    about_text: "Combinând tehnologii moderne, materiale de calitate și o abordare profesională, ajutăm clienții să-și transforme visele în realitate.",
    about_experience: "Ani de experiență",
    about_feature_1: "Echipă profesională",
    about_feature_1_text: "Specialiștii noștri garantează un nivel înalt de servicii și rezultate de calitate la fiecare etapă a proiectului.",
    about_feature_2: "Soluții inovatoare",
    about_feature_2_text: "Folosim materiale și tehnologii moderne pentru a crea interioare durabile și estetice.",
    about_services: "Serviciile noastre",
    testimonials_intro: "Recenzii clienți",
    testimonials_text: "Află ce spun clienții noștri despre calitatea serviciilor și rezultatele colaborării.",
    testimonial_1: "\"Profesionalismul și atenția la detalii au depășit așteptările noastre. Apartamentul nostru arată acum uimitor!\"",
    testimonial_1_role: "Manager de vânzări",
    testimonial_2: "\"Colaborarea cu echipa lor a fost ușoară și plăcută. Renovarea băii a fost realizată perfect și la timp.\"",
    testimonial_2_role: "Manager de proiect",
    testimonial_3: "\"Abordarea lor față de renovare este inspirată. Fiecare detaliu este bine gândit, iar rezultatul a depășit așteptările!\"",
    testimonial_3_role: "Designer de interior",
    testimonial_4: "\"Datorită muncii lor, apartamentul nostru s-a transformat într-un spațiu confortabil și elegant.\"",
    testimonial_4_role: "Arhitect",
    services_title: "Servicii",
    services_subtitle_1: "Descoperă",
    services_subtitle_2: "serviciile noastre",
    services_heading_1: "Renovare complexă",
    services_heading_2: "a apartamentelor și băilor",
    services_text: "Oferim un spectru complet de servicii de renovare la cheie, de la design interior până la finisaje finale, folosind materiale moderne și tehnologii pentru a crea spațiul perfect.",
    services_all: "Toate serviciile",
    service_design: "Design interior",
    service_design_text: "Creăm designuri unice și funcționale pentru casa ta, luând în considerare toate dorințele și tendințele moderne.",
    service_bathroom: "Renovare băi",
    service_bathroom_text: "Suntem specializați în crearea băilor moderne și practice folosind materiale de calitate.",
    service_finishing: "Lucrări de finisare",
    service_finishing_text: "Efectuăm finisaje de înaltă calitate pentru pereți, podele și tavane pentru a crea un interior elegant.",
    service_plumbing: "Lucrări de instalații sanitare",
    service_plumbing_text: "Instalare și reparare profesională a instalațiilor sanitare pentru funcționarea fiabilă a băii tale.",
    service_electrical: "Lucrări electrice",
    service_electrical_text: "Asigurăm electricitate sigură și modernă pentru casa ta.",
    service_furniture: "Instalare mobilier",
    service_furniture_text: "Instalare complexă a mobilierului încorporat și a electrocasnicelor pentru confortul tău.",
    steps_title: "Etape",
    steps_subtitle_1: "Cum",
    steps_subtitle_2: "lucrăm",
    step_1: "Pas 01",
    step_1_title: "Consultare",
    step_1_text: "Efectuăm consultări pentru a înțelege nevoile și obiectivele tale. Specialiștii noștri analizează proiectul pentru a crea un plan individual.",
    step_2: "Pas 02",
    step_2_title: "Planificare",
    step_2_text: "Elaborăm un plan detaliat al renovării, incluzând etapele, materialele și termenele de executare.",
    step_3: "Pas 03",
    step_3_title: "Realizare",
    step_3_text: "Efectuăm lucrările de renovare cu mare precizie, menținând o comunicare constantă cu clientul.",
    step_4: "Pas 04",
    step_4_title: "Finalizare și suport",
    step_4_text: "Finalizăm proiectul, verificăm calitatea și oferim suport după finalizarea lucrărilor.",
    cta_badge: "Nu rata!",
    cta_title: "Transformă-ți casa astăzi",
    cta_text: "Renovare la cheie cu utilizarea tehnologiilor și materialelor moderne. Alătură-te sutelor de clienți mulțumiți care și-au transformat casele.",
    cta_feature_1: "Garanție de calitate",
    cta_feature_2: "Materiale moderne",
    cta_feature_3: "Abordare individuală",
    cta_button_1: "Începe proiectul",
    cta_button_2: "Află mai multe",
    cta_stats: "Clienți mulțumiți",
    testimonials_title: "Recenzii",
    testimonials_subtitle_1: "Citește",
    testimonials_subtitle_2: "recenziile clienților",
    testimonial_5_title: "Renovare de calitate la cheie",
    testimonial_5_text_1: "Lucrarea a fost realizată la cel mai înalt nivel, toate termenele au fost respectate. Apartamentul nostru arată acum ca din reviste!",
    testimonial_5_text_2: "Fiecare detaliu este bine gândit, iar materialele sunt de înaltă calitate. Suntem foarte mulțumiți de rezultat și recomandăm tuturor!",
    testimonial_5_role: "Client",
    testimonial_6_title: "Abordare profesională",
    testimonial_6_text_1: "Echipa a demonstrat un profesionalism ridicat, luând în considerare toate dorințele noastre. Renovarea băii a depășit așteptările.",
    testimonial_6_text_2: "Procesul a fost bine organizat, iar comunicarea cu managerii a fost mereu excelentă. Mulțumim pentru munca excelentă!",
    testimonial_6_role: "Designer",
    testimonial_7_title: "Partener de încredere",
    testimonial_7_text_1: "Atenția lor la detalii și calitatea muncii i-au transformat în partenerul nostru permanent pentru renovări.",
    testimonial_7_text_2: "Avem încredere în această companie pentru toate proiectele noastre, și mereu își îndeplinesc așteptările. Recomandăm!",
    testimonial_7_role: "Antreprenor",
    testimonial_8_title: "Rezultat perfect",
    testimonial_8_text_1: "Renovarea a fost realizată rapid și calitativ. Acum casa noastră este un loc unde vrem să ne întoarcem.",
    testimonial_8_text_2: "Echipa a luat în considerare toate dorințele noastre, iar rezultatul a depășit așteptările. Mulțumim pentru profesionalism!",
    testimonial_8_role: "Manager",
    portfolio_title: "Portofoliu",
    portfolio_subtitle_1: "Vezi",
    portfolio_subtitle_2: "proiectele noastre",
    portfolio_filter_all: "Toate proiectele",
    portfolio_filter_design: "Design interior",
    portfolio_filter_apartments: "Renovare apartamente",
    portfolio_filter_bathrooms: "Băi",
    portfolio_filter_finishing: "Lucrări de finisare",
    portfolio_design: "Design interior",
    portfolio_apartments: "Renovare apartamente",
    portfolio_bathrooms: "Băi",
    portfolio_finishing: "Lucrări de finisare",
    portfolio_item_1: "Apartament modern în Chișinău",
    portfolio_item_2: "Apartament cu două camere",
    portfolio_item_3: "Baie minimalistă",
    portfolio_item_4: "Casă de țară",
    portfolio_item_5: "Studio în Chișinău",
    portfolio_item_6: "Apartament cu trei camere",
    portfolio_item_7: "Baie luxoasă",
    portfolio_item_8: "Birou în stil modern",
    faq_title: "Ai întrebări? Consultă FAQ",
    faq_description: "Am răspuns la cele mai frecvente întrebări despre renovarea apartamentelor și băilor pentru a te ajuta să faci alegerea corectă.",
    faq_1_title: "Cât durează renovarea?",
    faq_1_text: "Durata depinde de volumul lucrărilor, dar ne străduim mereu să finalizăm proiectul în cel mai scurt timp, menținând calitatea ridicată.",
    faq_2_title: "Ce materiale folosiți?",
    faq_2_text: "Folosim doar materiale certificate și de calitate de la furnizori de încredere pentru a garanta durabilitatea.",
    faq_3_title: "Pot comanda doar un proiect de design?",
    faq_3_text: "Da, oferim servicii de creare a proiectelor de design fără executarea lucrărilor de renovare, dacă este necesar.",
    faq_4_title: "Există garanție pentru lucrări?",
    faq_4_text: "Oferim garanție pentru toate lucrările efectuate, de la 1 la 3 ani, în funcție de tariful ales.",
    faq_5_title: "Cum începem colaborarea?",
    faq_5_text: "Contactați-ne prin formularul de pe site sau telefonic, și vom organiza o consultare gratuită.",
    faq_6_title: "Lucrați cu spații comerciale?",
    faq_6_text: "Da, realizăm renovări atât pentru spații rezidențiale, cât și pentru cele comerciale, adaptând soluțiile la nevoile tale.",
    contact_title: "Contacte",
    contact_subtitle_1: "Contactați",
    contact_subtitle_2: "cu noi",
    contact_address: "Telefon de contact",
    contact_email: "Email",
    contact_hours: "Program de lucru",
    contact_hours_text: "Luni-Vineri: 9:00 - 18:00 ",
    contact_hours_text2: "Sâmbătă: 10:00 - 16:00",
    contact_form_title: "Contactați-ne",
    form_loading: "Încărcare",
    form_sent: "Mesajul tău a fost trimis. Mulțumim!",
    form_submit: "TRIMITE MESAJ",
    footer_title: "Renovare",
    footer_text: "Creăm spații confortabile și moderne pentru casa ta folosind tehnologii și materiale avansate.",
    footer_links: "Link-uri utile",
    footer_link_home: "Acasă",
    footer_link_about: "Despre noi",
    footer_link_services: "Servicii",
    footer_link_terms: "Termeni și condiții",
    footer_link_privacy: "Politica de confidențialitate",
    footer_services: "Serviciile noastre",
    footer_service_design: "Design interior",
    footer_service_apartments: "Renovare apartamente",
    footer_service_bathrooms: "Renovare băi",
    footer_service_finishing: "Lucrări de finisare",
    footer_service_plumbing: "Lucrări de instalații sanitare",
    footer_contact: "Contacte",
    footer_phone_label: "Telefon:",
    footer_email_label: "Email:",
    footer_copyright: "Copyright",
    footer_rights: "Toate drepturile rezervate"
  },
  ru: {
    meta_title: "Ремонт квартир и ванных комнат под ключ",
    meta_description: "Профессиональный ремонт квартир и ванных комнат под ключ в Кишинёве. Качественные материалы, современные технологии и индивидуальный подход.",
    meta_keywords: "ремонт квартир, ремонт ванных, под ключ, дизайн интерьера",
    title: "Ремонт",
    nav_home: "Главная",
    nav_about: "О Нас",
    nav_services: "Услуги",
    nav_portfolio: "Портфолио",
    nav_contact: "Контакты",
    nav_getstarted: "Свяжитесь с нами",
    lang_ro: "Română",
    lang_ru: "Русский",
    lang_en: "English",
    hero_agency: "НАШЕ АГЕНТСТВО",
    hero_title: "РЕМОНТ ПОД КЛЮЧ",
    hero_text: "Мы создаём современные и комфортные пространства для вашего дома. Наша команда превращает ваши идеи в реальность, используя качественные материалы и передовые технологии для ремонта квартир и ванных комнат.",
    hero_button: "УЗНАТЬ ОБ УСЛУГАХ",
    hero_stats: "Завершённых проектов",
    about_title: "О Нас",
    about_subtitle_1: "Узнайте",
    about_subtitle_2: "больше о нас",
    about_heading: "Качественный ремонт для вашего дома",
    about_lead: "Мы создаём индивидуальные решения для ремонта квартир и ванных комнат, обеспечивая комфорт и стиль.",
    about_text: "Сочетая современные технологии, качественные материалы и профессиональный подход, мы помогаем клиентам воплощать их мечты в реальность.",
    about_experience: "Лет опыта",
    about_feature_1: "Профессиональная команда",
    about_feature_1_text: "Наши специалисты гарантируют высокий уровень услуг и качественные результаты на каждом этапе проекта.",
    about_feature_2: "Инновационные решения",
    about_feature_2_text: "Мы используем современные материалы и технологии для создания долговечных и эстетичных интерьеров.",
    about_services: "Наши услуги",
    testimonials_intro: "Отзывы клиентов",
    testimonials_text: "Узнайте, что говорят наши клиенты о качестве услуг и результатах сотрудничества.",
    testimonial_1: "\"Профессионализм и внимание к деталям превзошли наши ожидания. Наша квартира теперь выглядит потрясающе!\"",
    testimonial_1_role: "Менеджер по продажам",
    testimonial_2: "\"Сотрудничество с их командой было лёгким и приятным. Ремонт ванной комнаты выполнен идеально и в срок.\"",
    testimonial_2_role: "Менеджер проекта",
    testimonial_3: "\"Их подход к ремонту вдохновляет. Каждая деталь продумана, а результат превзошёл ожидания!\"",
    testimonial_3_role: "Дизайнер интерьеров",
    testimonial_4: "\"Благодаря их работе наша квартира превратилась в комфортное и стильное пространство.\"",
    testimonial_4_role: "Архитектор",
    services_title: "Услуги",
    services_subtitle_1: "Ознакомьтесь",
    services_subtitle_2: "с нашими услугами",
    services_heading_1: "Комплексный ремонт",
    services_heading_2: "квартир и ванных комнат",
    services_text: "Мы предлагаем полный спектр услуг по ремонту под ключ, от дизайна интерьера до финальной отделки, используя современные материалы и технологии для создания идеального пространства.",
    services_all: "Все услуги",
    service_design: "Дизайн интерьера",
    service_design_text: "Мы создаём уникальные и функциональные дизайны для вашего дома, учитывая все пожелания и современные тенденции.",
    service_bathroom: "Ремонт ванных комнат",
    service_bathroom_text: "Мы специализируемся на создании современных и практичных ванных комнат с использованием качественных материалов.",
    service_finishing: "Отделочные работы",
    service_finishing_text: "Мы выполняем высококачественную отделку стен, полов и потолков для создания элегантного интерьера.",
    service_plumbing: "Сантехнические работы",
    service_plumbing_text: "Профессиональная установка и ремонт сантехники для надёжной работы вашей ванной комнаты.",
    service_electrical: "Электромонтажные работы",
    service_electrical_text: "Мы обеспечиваем безопасное и современное электроснабжение для вашего дома.",
    service_furniture: "Установка мебели",
    service_furniture_text: "Комплексная установка встроенной мебели и бытовой техники для вашего комфорта.",
    steps_title: "Этапы",
    steps_subtitle_1: "Как",
    steps_subtitle_2: "мы работаем",
    step_1: "Шаг 01",
    step_1_title: "Консультация",
    step_1_text: "Мы проводим консультации, чтобы понять ваши потребности и цели. Наши специалисты анализируют проект для создания индивидуального плана.",
    step_2: "Шаг 02",
    step_2_title: "Планирование",
    step_2_text: "Мы разрабатываем детальный план ремонта, включая этапы, материалы и сроки выполнения.",
    step_3: "Шаг 03",
    step_3_title: "Реализация",
    step_3_text: "Мы выполняем ремонтные работы с высокой точностью, поддерживая постоянную связь с клиентом.",
    step_4: "Шаг 04",
    step_4_title: "Завершение и поддержка",
    step_4_text: "Мы завершаем проект, проверяем качество и предоставляем поддержку после окончания работ.",
    cta_badge: "Не упустите!",
    cta_title: "Преобразите свой дом сегодня",
    cta_text: "Ремонт под ключ с использованием современных технологий и материалов. Присоединяйтесь к сотням довольных клиентов, преобразивших свои дома.",
    cta_feature_1: "Гарантия качества",
    cta_feature_2: "Современные материалы",
    cta_feature_3: "Индивидуальный подход",
    cta_button_1: "Начать проект",
    cta_button_2: "Узнать больше",
    cta_stats: "Довольных клиентов",
    testimonials_title: "Отзывы",
    testimonials_subtitle_1: "Прочитайте",
    testimonials_subtitle_2: "отзывы клиентов",
    testimonial_5_title: "Качественный ремонт под ключ",
    testimonial_5_text_1: "Работа выполнена на высшем уровне, все сроки соблюдены. Наша квартира теперь выглядит как из журналов!",
    testimonial_5_text_2: "Каждая деталь продумана, а материалы высокого качества. Мы очень довольны результатом и рекомендуем всем!",
    testimonial_5_role: "Клиент",
    testimonial_6_title: "Профессиональный подход",
    testimonial_6_text_1: "Команда продемонстрировала высокий профессионализм, учитывая все наши пожелания. Ремонт ванной превзошёл ожидания.",
    testimonial_6_text_2: "Процесс был хорошо организован, а общение с менеджерами всегда отличное. Спасибо за отличную работу!",
    testimonial_6_role: "Дизайнер",
    testimonial_7_title: "Надёжный партнёр",
    testimonial_7_text_1: "Их внимание к деталям и качество работы сделали их нашим постоянным партнёром для ремонтов.",
    testimonial_7_text_2: "Мы доверяем этой компании все наши проекты, и они всегда оправдывают ожидания. Рекомендуем!",
    testimonial_7_role: "Предприниматель",
    testimonial_8_title: "Идеальный результат",
    testimonial_8_text_1: "Ремонт выполнен быстро и качественно. Теперь наш дом — это место, куда хочется возвращаться.",
    testimonial_8_text_2: "Команда учла все наши пожелания, а результат превзошёл ожидания. Спасибо за профессионализм!",
    testimonial_8_role: "Менеджер",
    portfolio_title: "Портфолио",
    portfolio_subtitle_1: "Посмотрите",
    portfolio_subtitle_2: "наши проекты",
    portfolio_filter_all: "Все проекты",
    portfolio_filter_design: "Дизайн интерьера",
    portfolio_filter_apartments: "Ремонт квартир",
    portfolio_filter_bathrooms: "Ванные комнаты",
    portfolio_filter_finishing: "Отделочные работы",
    portfolio_design: "Дизайн интерьера",
    portfolio_apartments: "Ремонт квартир",
    portfolio_bathrooms: "Ванные комнаты",
    portfolio_finishing: "Отделочные работы",
    portfolio_item_1: "Современная квартира в Кишинёве",
    portfolio_item_2: "Двухкомнатная квартира",
    portfolio_item_3: "Минималистичная ванная",
    portfolio_item_4: "Загородный дом",
    portfolio_item_5: "Студия в Кишинёве",
    portfolio_item_6: "Трёхкомнатная квартира",
    portfolio_item_7: "Роскошная ванная",
    portfolio_item_8: "Офис в современном стиле",
    faq_title: "Есть вопросы? Ознакомьтесь с FAQ",
    faq_description: "Мы ответили на самые распространённые вопросы о ремонте квартир и ванных комнат, чтобы помочь вам сделать правильное решение.",
    faq_1_title: "Сколько времени занимает ремонт?",
    faq_1_text: "Срок зависит от объёма работ, но мы всегда стремимся завершить проект в кратчайшие сроки, сохраняя высокое качество.",
    faq_2_title: "Какие материалы вы используете?",
    faq_2_text: "Мы используем только сертифицированные и качественные материалы от надёжных поставщиков для обеспечения долговечности.",
    faq_3_title: "Могу ли заказать только проект?",
    faq_3_text: "Да, мы предоставляем услуги по созданию дизайн-проектов без выполнения ремонтных работ, если это необходимо.",
    faq_4_title: "Есть ли гарантия на работы?",
    faq_4_text: "Мы предоставляем гарантию на все выполненные работы от 1 до 3 лет, в зависимости от выбранного тарифа.",
    faq_5_title: "Как начать сотрудничество?",
    faq_5_text: "Свяжитесь с нами через форму на сайте или по телефону, и мы организуем бесплатную консультацию.",
    faq_6_title: "Работаете ли вы с коммерческими помещениями?",
    faq_6_text: "Да, мы выполняем ремонт как для жилых, так и для коммерческих помещений, адаптируя решения к вашим потребностям.",
    contact_title: "Контакты",
    contact_subtitle_1: "Свяжитесь",
    contact_subtitle_2: "с нами",
    contact_address: "Наш телефон",
    contact_email: "Email",
    contact_hours: "Часы работы",
    contact_hours_text: "Понедельник-Пятница: 9:00 - 18:00 Суббота: 10:00 - 16:00",
    contact_form_title: "Свяжитесь с нами",
    form_loading: "Загрузка",
    form_sent: "Ваше сообщение отправлено. Спасибо!",
    form_submit: "ОТПРАВИТЬ СООБЩЕНИЕ",
    footer_title: "Ремонт",
    footer_text: "Мы создаём комфортные и современные пространства для вашего дома, используя передовые технологии и материалы.",
    footer_links: "Полезные ссылки",
    footer_link_home: "Главная",
    footer_link_about: "О нас",
    footer_link_services: "Услуги",
    footer_link_terms: "Условия использования",
    footer_link_privacy: "Политика конфиденциальности",
    footer_services: "Наши услуги",
    footer_service_design: "Дизайн интерьера",
    footer_service_apartments: "Ремонт квартир",
    footer_service_bathrooms: "Ремонт ванных комнат",
    footer_service_finishing: "Отделочные работы",
    footer_service_plumbing: "Сантехнические работы",
    footer_contact: "Контакты",
    footer_phone_label: "Телефон:",
    footer_email_label: "Email:",
    footer_copyright: "Copyright",
    footer_rights: "Все права защищены"
  },
  en: {
    meta_title: "Turnkey Apartment and Bathroom Renovation",
    meta_description: "Professional turnkey renovation of apartments and bathrooms in Chișinău. High-quality materials, modern technologies, and a personalized approach.",
    meta_keywords: "apartment renovation, bathroom renovation, turnkey, interior design",
    title: "Renovation",
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_getstarted: "Contact Us",
    lang_ro: "Română",
    lang_ru: "Русский",
    lang_en: "English",
    hero_agency: "OUR AGENCY",
    hero_title: "TURNKEY RENOVATION",
    hero_text: "We create modern and comfortable spaces for your home. Our team turns your ideas into reality using high-quality materials and advanced technologies for apartment and bathroom renovations.",
    hero_button: "LEARN ABOUT SERVICES",
    hero_stats: "Completed Projects",
    about_title: "About Us",
    about_subtitle_1: "Learn",
    about_subtitle_2: "more about us",
    about_heading: "Quality Renovation for Your Home",
    about_lead: "We create tailored solutions for apartment and bathroom renovations, ensuring comfort and style.",
    about_text: "By combining modern technologies, high-quality materials, and a professional approach, we help clients turn their dreams into reality.",
    about_experience: "Years of Experience",
    about_feature_1: "Professional Team",
    about_feature_1_text: "Our specialists guarantee a high level of service and quality results at every stage of the project.",
    about_feature_2: "Innovative Solutions",
    about_feature_2_text: "We use modern materials and technologies to create durable and aesthetic interiors.",
    about_services: "Our Services",
    testimonials_intro: "Client Reviews",
    testimonials_text: "Find out what our clients say about the quality of our services and the results of our collaboration.",
    testimonial_1: "\"The professionalism and attention to detail exceeded our expectations. Our apartment now looks stunning!\"",
    testimonial_1_role: "Sales Manager",
    testimonial_2: "\"Working with their team was easy and pleasant. The bathroom renovation was completed perfectly and on time.\"",
    testimonial_2_role: "Project Manager",
    testimonial_3: "\"Their approach to renovation is inspiring. Every detail is well thought out, and the result exceeded expectations!\"",
    testimonial_3_role: "Interior Designer",
    testimonial_4: "\"Thanks to their work, our apartment has transformed into a comfortable and stylish space.\"",
    testimonial_4_role: "Architect",
    services_title: "Services",
    services_subtitle_1: "Discover",
    services_subtitle_2: "our services",
    services_heading_1: "Comprehensive Renovation",
    services_heading_2: "of apartments and bathrooms",
    services_text: "We offer a full range of turnkey renovation services, from interior design to final finishes, using modern materials and technologies to create the perfect space.",
    services_all: "All Services",
    service_design: "Interior Design",
    service_design_text: "We create unique and functional designs for your home, considering all your wishes and modern trends.",
    service_bathroom: "Bathroom Renovation",
    service_bathroom_text: "We specialize in creating modern and practical bathrooms using high-quality materials.",
    service_finishing: "Finishing Works",
    service_finishing_text: "We perform high-quality finishes for walls, floors, and ceilings to create an elegant interior.",
    service_plumbing: "Plumbing Works",
    service_plumbing_text: "Professional installation and repair of plumbing systems for reliable bathroom operation.",
    service_electrical: "Electrical Works",
    service_electrical_text: "We ensure safe and modern electricity supply for your home.",
    service_furniture: "Furniture Installation",
    service_furniture_text: "Comprehensive installation of built-in furniture and appliances for your comfort.",
    steps_title: "Steps",
    steps_subtitle_1: "How",
    steps_subtitle_2: "we work",
    step_1: "Step 01",
    step_1_title: "Consultation",
    step_1_text: "We conduct consultations to understand your needs and goals. Our specialists analyze the project to create a personalized plan.",
    step_2: "Step 02",
    step_2_title: "Planning",
    step_2_text: "We develop a detailed renovation plan, including stages, materials, and timelines.",
    step_3: "Step 03",
    step_3_title: "Execution",
    step_3_text: "We carry out renovation works with high precision, maintaining constant communication with the client.",
    step_4: "Step 04",
    step_4_title: "Completion and Support",
    step_4_text: "We complete the project, check the quality, and provide support after the work is finished.",
    cta_badge: "Don't Miss Out!",
    cta_title: "Transform Your Home Today",
    cta_text: "Turnkey renovation using modern technologies and materials. Join hundreds of satisfied clients who have transformed their homes.",
    cta_feature_1: "Quality Guarantee",
    cta_feature_2: "Modern Materials",
    cta_feature_3: "Personalized Approach",
    cta_button_1: "Start Your Project",
    cta_button_2: "Learn More",
    cta_stats: "Satisfied Clients",
    testimonials_title: "Reviews",
    testimonials_subtitle_1: "Read",
    testimonials_subtitle_2: "client reviews",
    testimonial_5_title: "High-Quality Turnkey Renovation",
    testimonial_5_text_1: "The work was completed to the highest standard, and all deadlines were met. Our apartment now looks like it’s from a magazine!",
    testimonial_5_text_2: "Every detail is well thought out, and the materials are of high quality. We’re very satisfied with the result and recommend them to everyone!",
    testimonial_5_role: "Client",
    testimonial_6_title: "Professional Approach",
    testimonial_6_text_1: "The team demonstrated exceptional professionalism, taking into account all our wishes. The bathroom renovation exceeded expectations.",
    testimonial_6_text_2: "The process was well-organized, and communication with the managers was always excellent. Thank you for the outstanding work!",
    testimonial_6_role: "Designer",
    testimonial_7_title: "Reliable Partner",
    testimonial_7_text_1: "Their attention to detail and quality of work have made them our permanent partner for renovations.",
    testimonial_7_text_2: "We trust this company with all our projects, and they always meet expectations. Highly recommend!",
    testimonial_7_role: "Entrepreneur",
    testimonial_8_title: "Perfect Result",
    testimonial_8_text_1: "The renovation was completed quickly and with high quality. Our home is now a place we love to return to.",
    testimonial_8_text_2: "The team considered all our wishes, and the result exceeded our expectations. Thank you for your professionalism!",
    testimonial_8_role: "Manager",
    portfolio_title: "Portfolio",
    portfolio_subtitle_1: "View",
    portfolio_subtitle_2: "our projects",
    portfolio_filter_all: "All Projects",
    portfolio_filter_design: "Interior Design",
    portfolio_filter_apartments: "Apartment Renovation",
    portfolio_filter_bathrooms: "Bathrooms",
    portfolio_filter_finishing: "Finishing Works",
    portfolio_design: "Interior Design",
    portfolio_apartments: "Apartment Renovation",
    portfolio_bathrooms: "Bathrooms",
    portfolio_finishing: "Finishing Works",
    portfolio_item_1: "Modern Apartment in Chișinău",
    portfolio_item_2: "Two-Room Apartment",
    portfolio_item_3: "Minimalist Bathroom",
    portfolio_item_4: "Country House",
    portfolio_item_5: "Studio in Chișinău",
    portfolio_item_6: "Three-Bedroom Apartment",
    portfolio_item_7: "Luxury Bathroom",
    portfolio_item_8: "Modern Office",
    faq_title: "Have Questions? Check Our FAQ",
    faq_description: "We’ve answered the most common questions about apartment and bathroom renovations to help you make the right choice.",
    faq_1_title: "How Long Does Renovation Take?",
    faq_1_text: "The duration depends on the scope of work, but we always strive to complete the project as quickly as possible while maintaining high quality.",
    faq_2_title: "What Materials Do You Use?",
    faq_2_text: "We use only certified, high-quality materials from trusted suppliers to ensure durability.",
    faq_3_title: "Can I Order Only a Design Project?",
    faq_3_text: "Yes, we offer design project creation services without performing renovation work if needed.",
    faq_4_title: "Is There a Warranty for the Work?",
    faq_4_text: "We provide a warranty for all completed work, ranging from 1 to 3 years, depending on the chosen plan.",
    faq_5_title: "How Do We Start Working Together?",
    faq_5_text: "Contact us through the website form or by phone, and we’ll arrange a free consultation.",
    faq_6_title: "Do You Work with Commercial Spaces?",
    faq_6_text: "Yes, we perform renovations for both residential and commercial spaces, tailoring solutions to your needs.",
    contact_title: "Contact",
    contact_subtitle_1: "Get in touch",
    contact_subtitle_2: "with us",
    contact_address: "Our Phone",
    contact_email: "Email",
    contact_hours: "Working Hours",
    contact_hours_text: "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM",
    contact_form_title: "Contact Us",
    form_loading: "Loading",
    form_sent: "Your message has been sent. Thank you!",
    form_submit: "SEND MESSAGE",
    footer_title: "Renovation",
    footer_text: "We create comfortable and modern spaces for your home using advanced technologies and materials.",
    footer_links: "Useful Links",
    footer_link_home: "Home",
    footer_link_about: "About Us",
    footer_link_services: "Services",
    footer_link_terms: "Terms of Use",
    footer_link_privacy: "Privacy Policy",
    footer_services: "Our Services",
    footer_service_design: "Interior Design",
    footer_service_apartments: "Apartment Renovation",
    footer_service_bathrooms: "Bathroom Renovation",
    footer_service_finishing: "Finishing Works",
    footer_service_plumbing: "Plumbing Works",
    footer_contact: "Contact",
    footer_phone_label: "Phone:",
    footer_email_label: "Email:",
    footer_copyright: "Copyright",
    footer_rights: "All Rights Reserved"
  }
};

function changeLanguage(lang) {
  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all elements with data-translate attributes
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update meta tags
  document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta_description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta_keywords);
  document.querySelector('title').textContent = translations[lang].meta_title;

  // Update placeholder attributes in the contact form
  const formInputs = document.querySelectorAll('.contact-form-wrapper input, .contact-form-wrapper textarea');
  formInputs.forEach(input => {
    if (input.name === 'name') input.placeholder = lang === 'en' ? 'Name' : lang === 'ru' ? 'Имя' : 'Nume';
    if (input.name === 'email') input.placeholder = 'Email';
    if (input.name === 'subject') input.placeholder = lang === 'en' ? 'Subject' : lang === 'ru' ? 'Тема' : 'Subiect';
    if (input.name === 'message') input.placeholder = lang === 'en' ? 'Message...' : lang === 'ru' ? 'Сообщение...' : 'Mesaj...';
  });

  // Update HTML content with innerHTML for complex elements
  document.querySelectorAll('[data-translate-html]').forEach(element => {
    const key = element.getAttribute('data-translate-html');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Set default language to Romanian
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('ro');
});