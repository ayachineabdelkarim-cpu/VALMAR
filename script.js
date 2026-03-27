/* =====================================================
   VAL MAR — script.js (Enhanced)
   ===================================================== */

/* ---- Translations ---- */
const translations = {
    ar: {
        "nav-about": "من نحن",
        "nav-raw": "المصدر الطبيعي",
        "nav-products": "منتجاتنا",
        "nav-process": "كيف نصنع الفارق؟",
        "nav-contact": "تواصل معنا",
        "hero-title": "VAL MAR",
        "hero-explanation": "نقود التحول نحو الاقتصاد الأزرق المستدام. في VAL MAR، نبتكر حلولاً صناعية وغذائية متقدمة، ونحول البقايا العضوية البحرية إلى ثروة تدعم الاقتصاد الدائري بصفر نفايات.",
        "hero-desc": "من قلب البحر إلى مستقبلك.. دمج بين الطبيعة والابتكار.",
        "cta-btn": "اكتشف القيمة",
        "about-title": "من نحن",
        "about-desc": "في VAL MAR، لا نرى البقايا العضوية كنفايات، بل كمصدر غير مستغل للصحة والصناعة. نحن مؤسسة ناشئة طموحة تقود الابتكار في استخلاص الزيوت الطبيعية والبروتينات البحرية للمساهمة في بناء عالم أنظف.",
        "raw-title": "من قلب الطبيعة",
        "raw-desc": "تعتمد جودتنا على النقاء المطلق. ننتقي أفضل الموارد العضوية البحرية بعناية فائقة، لنضمن لك منتجاً نهائياً يحمل أعلى معايير الجودة العالمية.",
        "products-title": "منتجاتنا الاستثنائية",
        "products-subtitle": "طيف واسع من الحلول المستخلصة بدقة لتلبية تطلعاتك بأعلى معايير النقاء.",
        "prod1-title": "زيوت أسماك طبيعية (أوميغا 3)",
        "prod1-desc": "إكسير الحياة الطبيعي، مستخلص نقي لدعم المكملات الغذائية وصناعات التجميل الفاخرة.",
        "prod2-title": "بروتين السمك / فرينة السمك",
        "prod2-desc": "طاقة خالصة ونمو مستدام.. مسحوق بروتين حيوي عالي الجودة لقطاع الأعلاف والثروة الحيوانية.",
        "prod5-title": "حلول صناعية صديقة للبيئة",
        "prod5-desc": "مواد خام طبيعية مبتكرة وفعالة لدعم مختلف الصناعات البيئية والتحويلية.",
        "process-title": "كيف نصنع الفارق؟",
        "process-subtitle": "نأخذ من الطبيعة بحكمة، ونعيد لها التوازن من خلال خط إنتاج مبتكر يحترم البيئة.",
        "step1-title": "1. الانتقاء الدقيق",
        "step1-desc": "تأمين الموارد البحرية العضوية من مصادر مستدامة وموثوقة حصرياً.",
        "step2-title": "2. المعالجة المتقدمة",
        "step2-desc": "تسخير أحدث التقنيات التكنولوجية لفصل المكونات وحفظ قيمتها الغذائية.",
        "step3-title": "3. الاستخلاص الذكي",
        "step3-desc": "استخلاص دقيق للزيوت والبروتينات بمعايير جودة صارمة لا تقبل المساومة.",
        "step4-title": "4. القيمة النهائية",
        "step4-desc": "تقديم منتجات طبيعية فاخرة وجاهزة لتلبية احتياجات الأسواق بكل كفاءة.",
        "contact-title": "دعنا نصنع المستقبل معاً",
        "contact-desc": "سواء كنت مستثمراً، أو شريكاً، أو عميلاً طموحاً.. فريقنا جاهز للتواصل والتطوير المشترك.",
        "contact-email-label": "البريد الإلكتروني",
        "contact-phone-label": "الهاتف",
        "contact-location-label": "المقر",
        "contact-location": "الجزائر، الشلف",
        "footer-text": "© 2026 VAL MAR. كل الحقوق محفوظة. نبتكر من أجل غد مستدام."
    },
    en: {
        "nav-about": "Who We Are",
        "nav-raw": "Natural Sourcing",
        "nav-products": "Our Solutions",
        "nav-process": "How We Make an Impact",
        "nav-contact": "Connect With Us",
        "hero-title": "VAL MAR",
        "hero-explanation": "Leading the transition towards a sustainable blue economy. At VAL MAR, we innovate advanced nutritional and industrial solutions, transforming marine organic residues into wealth that supports a zero-waste circular economy.",
        "hero-desc": "From the heart of the ocean to your future... Merging nature with innovation.",
        "cta-btn": "Discover The Value",
        "about-title": "Who We Are",
        "about-desc": "At VAL MAR, we don't see organic remains as waste, but as an untapped resource for health and industry. We are an ambitious startup driving innovation in extracting natural marine oils and proteins to build a cleaner world.",
        "raw-title": "Sourced from Nature",
        "raw-desc": "Our quality relies on absolute purity. We carefully select the finest organic marine resources, ensuring a final product that meets the highest global standards.",
        "products-title": "Our Exceptional Solutions",
        "products-subtitle": "A broad spectrum of meticulously extracted products to meet your highest expectations.",
        "prod1-title": "Natural Fish Oils (Omega-3)",
        "prod1-desc": "Nature's elixir. A pure extract to empower premium dietary supplements and luxurious cosmetics.",
        "prod2-title": "Fish Protein / Fish Meal",
        "prod2-desc": "Pure energy and sustainable growth. High-quality vital protein powder for the premium feed sector.",
        "prod5-title": "Eco-Friendly Industrial Solutions",
        "prod5-desc": "Innovative and effective natural raw materials supporting diverse environmental and manufacturing industries.",
        "process-title": "How We Make an Impact",
        "process-subtitle": "We take from nature wisely, and restore its balance through an innovative, eco-respecting production line.",
        "step1-title": "1. Careful Selection",
        "step1-desc": "Securing organic marine resources exclusively from sustainable and reliable sources.",
        "step2-title": "2. Advanced Processing",
        "step2-desc": "Harnessing cutting-edge technologies to separate components while preserving their nutritional value.",
        "step3-title": "3. Smart Extraction",
        "step3-desc": "Precise extraction of oils and proteins under uncompromising quality standards.",
        "step4-title": "4. Final Value",
        "step4-desc": "Delivering premium natural products ready to efficiently meet market demands.",
        "contact-title": "Let's Shape the Future Together",
        "contact-desc": "Whether you are an investor, a partner, or an ambitious client... our team is ready to connect and co-create.",
        "contact-email-label": "Email",
        "contact-phone-label": "Phone",
        "contact-location-label": "Location",
        "contact-location": "Algeria, Chlef",
        "footer-text": "© 2026 VAL MAR. Innovating for a sustainable tomorrow."
    },
    fr: {
        "nav-about": "Qui Sommes-Nous",
        "nav-raw": "Source Naturelle",
        "nav-products": "Nos Solutions",
        "nav-process": "Notre Impact",
        "nav-contact": "Contactez-Nous",
        "hero-title": "VAL MAR",
        "hero-explanation": "Leader de la transition vers une économie bleue durable. Chez VAL MAR, nous innovons dans des solutions nutritionnelles et industrielles, transformant les résidus organiques marins en richesse pour soutenir une économie circulaire zéro déchet.",
        "hero-desc": "Du cœur de l'océan à votre avenir... Fusionner la nature et l'innovation.",
        "cta-btn": "Découvrez La Valeur",
        "about-title": "Qui Sommes-Nous",
        "about-desc": "Chez VAL MAR, nous ne voyons pas les restes organiques comme des déchets, mais comme une ressource inexploitée. Nous sommes une startup ambitieuse qui stimule l'innovation dans l'extraction d'huiles et de protéines marines pour bâtir un monde plus propre.",
        "raw-title": "Puisé de la Nature",
        "raw-desc": "Notre qualité repose sur une pureté absolue. Nous sélectionnons avec soin les meilleures ressources marines, garantissant un produit final répondant aux normes mondiales les plus strictes.",
        "products-title": "Nos Solutions Exceptionnelles",
        "products-subtitle": "Un large éventail de produits minutieusement extraits pour répondre à vos attentes les plus élevées.",
        "prod1-title": "Huiles de Poisson Naturelles (Oméga-3)",
        "prod1-desc": "L'élixir de la nature. Un extrait pur pour enrichir les compléments alimentaires et les cosmétiques de luxe.",
        "prod2-title": "Protéine / Farine de Poisson",
        "prod2-desc": "Énergie pure et croissance durable. Poudre de protéines de haute qualité pour le secteur de l'alimentation animale.",
        "prod5-title": "Solutions Industrielles Écologiques",
        "prod5-desc": "Matières premières naturelles innovantes pour soutenir diverses industries environnementales et manufacturières.",
        "process-title": "Comment Nous Faisons la Différence",
        "process-subtitle": "Nous puisons dans la nature avec sagesse et restaurons son équilibre grâce à une ligne de production respectueuse de l'environnement.",
        "step1-title": "1. Sélection Soigneuse",
        "step1-desc": "Approvisionnement en ressources marines exclusivement à partir de sources durables et fiables.",
        "step2-title": "2. Traitement Avancé",
        "step2-desc": "Utilisation de technologies de pointe pour séparer les composants tout en préservant leur valeur.",
        "step3-title": "3. Extraction Intelligente",
        "step3-desc": "Extraction précise sous des normes de qualité strictes et sans compromis.",
        "step4-title": "4. Valeur Finale",
        "step4-desc": "Fournir des produits naturels haut de gamme prêts à répondre efficacement aux demandes du marché.",
        "contact-title": "Façonnons l'Avenir Ensemble",
        "contact-desc": "Que vous soyez investisseur, partenaire ou client ambitieux... notre équipe est prête à collaborer.",
        "contact-email-label": "Email",
        "contact-phone-label": "Téléphone",
        "contact-location-label": "Emplacement",
        "contact-location": "Algérie, Chlef",
        "footer-text": "© 2026 VAL MAR. Innover pour un avenir durable."
    },
    es: {
        "nav-about": "Quiénes Somos",
        "nav-raw": "Origen Natural",
        "nav-products": "Nuestras Soluciones",
        "nav-process": "Nuestro Impacto",
        "nav-contact": "Conéctate",
        "hero-title": "VAL MAR",
        "hero-explanation": "Liderando la transición hacia una economía azul sostenible. En VAL MAR, innovamos soluciones industriales avanzadas, transformando residuos marinos en riqueza que apoya una economía circular de cero residuos.",
        "hero-desc": "Desde el corazón del océano hacia su futuro... Fusionando naturaleza e innovación.",
        "cta-btn": "Descubra el Valor",
        "about-title": "Quiénes Somos",
        "about-desc": "En VAL MAR, no vemos los restos orgánicos como desechos, sino como un recurso inexplorado. Somos una startup ambiciosa que impulsa la innovación en la extracción de aceites y proteínas marinas naturales para un mundo global más limpio.",
        "raw-title": "Extraído de la Naturaleza",
        "raw-desc": "Nuestra calidad confía en la pureza absoluta. Seleccionamos cuidadosamente los mejores recursos orgánicos, asegurando un producto final que cumple con los estándares globales.",
        "products-title": "Soluciones Excepcionales",
        "products-subtitle": "Un amplio espectro de productos meticulosamente extraídos para superar sus expectativas.",
        "prod1-title": "Aceites de Pescado Naturales (Omega-3)",
        "prod1-desc": "El elixir de la naturaleza, para potenciar suplementos dietéticos y cosmética premium.",
        "prod2-title": "Proteína / Harina de Pescado",
        "prod2-desc": "Energía pura y crecimiento sostenible. Polvo de proteína vital de alta calidad.",
        "prod5-title": "Soluciones Industriales Ecológicas",
        "prod5-desc": "Materias primas naturales innovadoras que apoyan diversas industrias ambientales.",
        "process-title": "Cómo Marcamos la Diferencia",
        "process-subtitle": "Tomamos de la naturaleza con sabiduría, restaurando su equilibrio mediante una producción innovadora y respetuosa.",
        "step1-title": "1. Selección Cuidadosa",
        "step1-desc": "Asegurando recursos marinos exclusivamente de fuentes sostenibles y confiables.",
        "step2-title": "2. Procesamiento Avanzado",
        "step2-desc": "Aprovechando tecnologías de vanguardia para preservar el valor nutricional.",
        "step3-title": "3. Extracción Inteligente",
        "step3-desc": "Extracción precisa de aceites y proteínas bajo estándares de calidad intransigentes.",
        "step4-title": "4. Valor Final",
        "step4-desc": "Entregando productos naturales premium listos para satisfacer las demandas del mercado.",
        "contact-title": "Formemos el Futuro Juntos",
        "contact-desc": "Ya sea un inversor, un socio o un cliente ambicioso... nuestro equipo está listo para colaborar y co-crear.",
        "contact-email-label": "Correo electrónico",
        "contact-phone-label": "Teléfono",
        "contact-location-label": "Ubicación",
        "contact-location": "Argelia, Chlef",
        "footer-text": "© 2026 VAL MAR. Innovando por un mañana sostenible."
    },
    ru: {
        "nav-about": "Кто мы",
        "nav-raw": "Природный источник",
        "nav-products": "Наши решения",
        "nav-process": "Как мы меняем мир",
        "nav-contact": "Свяжитесь с нами",
        "hero-title": "VAL MAR",
        "hero-explanation": "Лидеры перехода к устойчивой «синей экономике». В VAL MAR мы создаем передовые промышленные решения, превращая морские органические отходы в богатство, поддерживающее безотходную экономику замкнутого цикла.",
        "hero-desc": "Из самого сердца океана в ваше будущее... Слияние природы и инноваций.",
        "cta-btn": "Откройте для себя ценность",
        "about-title": "Кто мы",
        "about-desc": "В VAL MAR мы не видим в органических остатках отходы, мы видим неиспользованный ресурс для здоровья и промышленности. Мы — амбициозный стартап, внедряющий инновации в добычу натуральных морских масел и белков.",
        "raw-title": "Получено из природы",
        "raw-desc": "Наше качество основано на абсолютной чистоте. Мы тщательно отбираем лучшие органические морские ресурсы для обеспечения высочайших мировых стандартов.",
        "products-title": "Наши исключительные решения",
        "products-subtitle": "Широкий спектр тщательно экстрагированных продуктов, превосходящих ваши ожидания.",
        "prod1-title": "Натуральный рыбий жир (Омега-3)",
        "prod1-desc": "Эликсир природы. Чистый экстракт для создания премиальных пищевых добавок и люксовой косметики.",
        "prod2-title": "Рыбный белок / Рыбная мука",
        "prod2-desc": "Чистая энергия и устойчивый рост. Высококачественный белковый порошок для элитных кормов.",
        "prod5-title": "Экологичные промышленные решения",
        "prod5-desc": "Инновационное и эффективное натуральное сырье, поддерживающее экологические отрасли.",
        "process-title": "Как мы делаем разницу",
        "process-subtitle": "Мы мудро берем у природы и восстанавливаем её баланс с помощью инновационного производства.",
        "step1-title": "1. Тщательный отбор",
        "step1-desc": "Получение морских биоресурсов исключительно из надежных и устойчивых источников.",
        "step2-title": "2. Передовая обработка",
        "step2-desc": "Использование передовых технологий для сохранения пищевой ценности.",
        "step3-title": "3. Умная экстракция",
        "step3-desc": "Точная экстракция по бескомпромиссным стандартам качества.",
        "step4-title": "4. Конечная ценность",
        "step4-desc": "Поставка натуральных продуктов премиум-класса, готовых удовлетворить спрос на рынке.",
        "contact-title": "Давайте формировать будущее вместе",
        "contact-desc": "Будь вы инвестором, партнером или амбициозным клиентом... наша команда готова к сотрудничеству.",
        "contact-email-label": "Эл. почта",
        "contact-phone-label": "Телефон",
        "contact-location-label": "Местоположение",
        "contact-location": "Алжир, Шлеф",
        "footer-text": "© 2026 VAL MAR. Инновации для устойчивого будущего."
    }
};

/* =====================================================
   NAV SLIDE (Hamburger Menu)
   ===================================================== */
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navClickLinks = document.querySelectorAll('.nav-links li a');

    const closeMenu = () => {
        nav.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
        hamburger.setAttribute('aria-label', 'فتح القائمة');
        navLinks.forEach(l => l.style.animation = '');
    };

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        const isOpen = nav.classList.contains('nav-active');
        hamburger.classList.toggle('toggle');
        hamburger.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');

        navLinks.forEach((link, index) => {
            link.style.animation = isOpen
                ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                : '';
        });
    });

    // Keyboard support
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });

    // Close on link click
    navClickLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
};

/* =====================================================
   THEME HANDLER
   ===================================================== */
const themeHandler = () => {
    const themeToggle       = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const currentTheme = localStorage.getItem('theme') || 'light';

    const setTheme = (isDark) => {
        const icon = isDark ? '☀️' : '🌙';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = icon;
        if (themeToggleMobile) themeToggleMobile.textContent = icon;
    };

    setTheme(currentTheme === 'dark');

    const toggle = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        setTheme(!isDark);
    };

    themeToggle.addEventListener('click', toggle);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggle);
};

/* =====================================================
   LANGUAGE HANDLER
   ===================================================== */
const languageHandler = () => {
    const langSelect       = document.getElementById('lang-select');
    const langSelectMobile = document.getElementById('lang-select-mobile');

    const changeLanguage = (lang) => {
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] === undefined) return;

            // Preserve child elements (like nav icons)
            const iconSpan = el.querySelector('.nav-icon');
            if (iconSpan) {
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) node.remove();
                });
                el.appendChild(document.createTextNode(' ' + t[key]));
            } else {
                el.textContent = t[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) el.placeholder = t[key];
        });

        const emailLink = document.querySelector('.info-card a[href^="mailto"]');
        if (emailLink) emailLink.textContent = 'chouiebfatimazahra@gmail.com';

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', lang);

        if (langSelect)       langSelect.value = lang;
        if (langSelectMobile) langSelectMobile.value = lang;
    };

    const onLangChange = (e) => changeLanguage(e.target.value);
    if (langSelect)       langSelect.addEventListener('change', onLangChange);
    if (langSelectMobile) langSelectMobile.addEventListener('change', onLangChange);

    const savedLang = localStorage.getItem('lang') || 'ar';
    changeLanguage(savedLang);
};

/* =====================================================
   SCROLL REVEAL
   ===================================================== */
const scrollReveal = () => {
    const revealEls = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-reveal]'));
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => observer.observe(el));
};

/* =====================================================
   BACK TO TOP
   ===================================================== */
const backToTop = () => {
    const btn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

/* =====================================================
   HERO SLIDER
   ===================================================== */
const heroSlider = () => {
    const slides = document.querySelectorAll('.profile-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let currentIndex = 0;
    if (slides.length === 0) return;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    let slideInterval = setInterval(nextSlide, 3500);

    const resetInterval = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3500);
    };
};

/* =====================================================
   INIT
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    themeHandler();
    languageHandler();
    scrollReveal();
    backToTop();
    heroSlider();
});
