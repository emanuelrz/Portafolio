document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. NAVEGACIÓN LIMPIA (Evita preview de URL en la esquina del navegador)
       ========================================================================== */
    document.querySelectorAll('.js-social-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = btn.getAttribute('data-url');
            const mailto = btn.getAttribute('data-mailto');

            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            } else if (mailto) {
                window.location.href = `mailto:${mailto}`;
            }
        });
    });

    /* ==========================================================================
       2. DICCIONARIO DE TRADUCCIÓN (i18n: ES / EN)
       ========================================================================== */
    const translations = {
        es: {
            "nav.home": "Inicio",
            "nav.about": "Sobre Mí",
            "nav.skills": "Habilidades",
            "nav.projects": "Proyectos",
            "nav.experience": "Experiencia",
            "nav.contact": "Contacto",
            "nav.cv": "CV",
            
            "hero.greeting": "¡Hola! Mi nombre es",
            "hero.subtitle": "Técnico Universitario en Programación",
            "hero.description": "Técnico Universitario en Programación (UTN FRCU). Especializado en el desarrollo de software Cliente/Servidor, APIs y arquitecturas robustas bajo principios de código limpio y metodologías ágiles.",
            "hero.btnProjects": "Ver mis proyectos",
            "hero.btnCv": "Descargar CV",
            "hero.btnContact": "Contáctame",
            
            "about.title": "Sobre Mí",
            "about.heading": "Pasión por el código y la ingeniería de software",
            "about.p1": "Soy <strong>Técnico Universitario en Programación</strong> graduado de la Universidad Tecnológica Nacional (UTN FRCU). Me especializo en la construcción de soluciones web completas, integrando interfaces dinámicas con backends escalables, seguros y bien estructurados.",
            "about.p2": "Cuento con experiencia en levantamiento de requerimientos, diseño de bases de datos relacionales, desarrollo de Web APIs y buenas prácticas de desarrollo como <strong>SOLID, Code Reviews y Scrum</strong>. Me apasiona el aprendizaje continuo y aportar valor en cada etapa del ciclo de vida del software.",
            "about.stat1": "Formación Universitaria Oficial",
            "about.stat2": "Tecnologías & Frameworks",
            "about.stat3": "Compromiso & Autogestión",
            
            "skills.title": "Habilidades Técnicas",
            "skills.subtitle": "Tecnologías, marcos de trabajo y herramientas aplicadas en el ciclo de vida del software.",
            "skills.backendTitle": "Lenguajes & Backend",
            "skills.backendDesc": "Programación orientada a objetos (POO), arquitectura Cliente/Servidor y APIs.",
            "skills.frontendTitle": "Frontend & UI",
            "skills.frontendDesc": "Interfaces dinámicas, desarrollo de componentes, consumo de servicios y diseño responsivo.",
            "skills.toolsTitle": "Bases de Datos & Prácticas",
            "skills.toolsDesc": "Persistencia relacional, control de versiones colaborativo y metodologías ágiles.",
            
            "projects.title": "Mis Proyectos",
            "projects.filterAll": "Todos",
            "projects.filterFullstack": "Full-Stack",
            "projects.filterBackend": "Backend",
            "projects.filterFrontend": "Frontend",
            "projects.muebleriaDesc": "Showroom digital interactivo y catálogo de mobiliario artesanal. Cuenta con curaduría de espacios, cálculo de presupuestos en tiempo real, agendador de visitas a taller y cotizador directo con integración a WhatsApp.",
            "projects.p1Desc": "Plataforma web desarrollada para centralizar y digitalizar la gestión de postulantes laborales. Construida bajo principios de POO, interfaz dinámica en React, Web APIs y modelado de bases de datos relacionales (SQL).",
            "projects.p2Desc": "Plataforma de comunicación en tiempo real con WebSockets, arquitectura Cliente/Servidor distribuida y una interfaz interactiva y reactiva.",
            "projects.p3Desc": "API de procesamiento y análisis de métricas en la nube con autenticación segura, estructurada bajo Clean Architecture y contenedorizada con Docker.",
            "projects.dragHint": "Desliza o arrastra para ver más proyectos",
            
            "experience.title": "Experiencia y Educación",
            "experience.e1Title": "Profesional IT / Desarrollador Full-Stack",
            "experience.e1Desc": "Desarrollo integral de plataforma web en entorno Cliente/Servidor y estructuración de base de datos para la nueva bolsa de empleo municipal. Levantamiento directo de requerimientos, diseño arquitectónico, documentación técnica del sistema, implementación de módulos CRUD y control de versiones con Git/GitHub.",
            "experience.e2Title": "Especialización en Desarrollo Web Full-Stack",
            "experience.e2Desc": "Formación intensiva de alto nivel en tecnologías web modernas, arquitecturas escalables, buenas prácticas de desarrollo ágil y metodologías colaborativas impartidas por el ITBA y Santander.",
            "experience.e3Title": "Técnico Universitario en Programación",
            "experience.e3Desc": "Formación universitaria oficial en desarrollo de software y tecnologías de la información. Dominio de algoritmos, programación orientada a objetos (POO), modelado de bases de datos relacionales (SQL), ingeniería de software y metodologías ágiles.",
            
            "contact.title": "Contacto",
            "contact.subtitle": "¿Tienes alguna propuesta o proyecto en mente? Hablemos y construyamos algo extraordinario.",
            "contact.status": "Disponible para propuestas",
            "contact.heading": "¡Hablemos de tu próximo proyecto!",
            "contact.desc": "Estoy abierto a oportunidades laborales, proyectos freelance y desafíos técnicos en desarrollo de software. Elige el medio que prefieras:",
            "contact.locationTitle": "Ubicación",
            "contact.locationVal": "San José, Entre Ríos, Argentina",
            "contact.perk1": "Respuesta ágil",
            "contact.perk2": "Remoto o Híbrido",
            "contact.whatsappTooltip": "¡Chatea conmigo por WhatsApp!",
            
            "form.name": "Nombre Completo",
            "form.email": "Correo Electrónico",
            "form.subject": "Asunto",
            "form.message": "Mensaje",
            "form.submit": "Enviar Mensaje",
            "form.sending": "Enviando...",
            "form.success": "¡Mensaje enviado con éxito!",
            
            "footer.rights": "Todos los derechos reservados.",
            "footer.builtWith": "Diseñado con",
            "footer.tech": "usando HTML, CSS y JavaScript."
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About Me",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.experience": "Experience",
            "nav.contact": "Contact",
            "nav.cv": "Resume",
            
            "hero.greeting": "Hi! My name is",
            "hero.subtitle": "University Degree in Computer Programming",
            "hero.description": "University Degree in Computer Programming (UTN FRCU). Specialized in Client/Server web development, Web APIs, and robust architectures built with clean code and agile methodologies.",
            "hero.btnProjects": "View My Projects",
            "hero.btnCv": "Download Resume",
            "hero.btnContact": "Get in Touch",
            
            "about.title": "About Me",
            "about.heading": "Passion for Clean Code & Software Engineering",
            "about.p1": "I am a <strong>University Technician in Programming</strong> graduated from Universidad Tecnológica Nacional (UTN FRCU). I build end-to-end web applications, integrating reactive frontend interfaces with scalable, secure, and structured backends.",
            "about.p2": "Experienced in direct requirement elicitation, relational database design, Web API development, and software engineering practices such as <strong>SOLID principles, Code Reviews, and Scrum</strong>. Always eager to learn and drive impact across all SDLC phases.",
            "about.stat1": "Official University Degree",
            "about.stat2": "Technologies & Frameworks",
            "about.stat3": "Commitment & Ownership",
            
            "skills.title": "Technical Skills",
            "skills.subtitle": "Technologies, frameworks, and engineering tools applied across the modern software lifecycle.",
            "skills.backendTitle": "Languages & Backend",
            "skills.backendDesc": "Object-Oriented Programming (OOP), Client/Server architecture, and Web APIs.",
            "skills.frontendTitle": "Frontend & UI",
            "skills.frontendDesc": "Dynamic UI components, API consumption, responsive layout, and modern JavaScript.",
            "skills.toolsTitle": "Databases & Practices",
            "skills.toolsDesc": "Relational data persistence, collaborative version control, and agile Scrum workflows.",
            
            "projects.title": "Featured Projects",
            "projects.filterAll": "All",
            "projects.filterFullstack": "Full-Stack",
            "projects.filterBackend": "Backend",
            "projects.filterFrontend": "Frontend",
            "projects.muebleriaDesc": "Interactive digital showroom and catalog for handcrafted sustainable furniture. Features a custom space curator, real-time budget calculator, workshop visit scheduler, and direct WhatsApp quote integration.",
            "projects.p1Desc": "Full-Stack web platform developed to centralize and digitalize applicant management for the municipal job board. Built with OOP, React UI, Web APIs, and relational SQL database modeling.",
            "projects.p2Desc": "Real-time communication platform built with WebSockets, distributed Client/Server architecture, and a reactive interface.",
            "projects.p3Desc": "Cloud metrics processing and analytics API featuring secure authentication, Clean Architecture, and Dockerized deployment containers.",
            "projects.dragHint": "Swipe or drag to explore more projects",
            
            "experience.title": "Experience & Education",
            "experience.e1Title": "IT Professional / Full-Stack Developer",
            "experience.e1Desc": "End-to-end web platform development in Client/Server environment and relational database architecture for the municipal job board. Direct requirement gathering, architectural design, CRUD modules implementation, and version control using Git/GitHub.",
            "experience.e2Title": "Full-Stack Web Development Specialization",
            "experience.e2Desc": "High-level intensive program covering modern web architectures, scalable API patterns, agile best practices, and collaborative software engineering delivered by ITBA and Santander.",
            "experience.e3Title": "University Degree in Computer Programming",
            "experience.e3Desc": "Official university degree in software development and information technology. Mastery of algorithms, Object-Oriented Programming (OOP), relational database design (SQL), software engineering, and agile methodologies.",
            
            "contact.title": "Get In Touch",
            "contact.subtitle": "Have a proposal or project in mind? Let's connect and build something extraordinary.",
            "contact.status": "Available for proposals",
            "contact.heading": "Let's talk about your next project!",
            "contact.desc": "I am open to developer roles, freelance projects, and technical challenges in software development. Choose your preferred channel:",
            "contact.locationTitle": "Location",
            "contact.locationVal": "San José, Entre Ríos, Argentina",
            "contact.perk1": "Fast response",
            "contact.perk2": "Remote or Hybrid",
            "contact.whatsappTooltip": "Chat with me on WhatsApp!",
            
            "form.name": "Full Name",
            "form.email": "Email Address",
            "form.subject": "Subject",
            "form.message": "Message",
            "form.submit": "Send Message",
            "form.sending": "Sending...",
            "form.success": "Message sent successfully!",
            
            "footer.rights": "All rights reserved.",
            "footer.builtWith": "Crafted with",
            "footer.tech": "using HTML, CSS & JavaScript."
        }
    };

    const typingWords = {
        es: ["Full-Stack", "Java & TypeScript", "React & Node.js", "Técnico Universitario"],
        en: ["Full-Stack", "Java & TypeScript", "React & Node.js", "Software Developer"]
    };

    let currentLang = localStorage.getItem('portfolio_lang') || 'es';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        
        const langCodeEl = document.getElementById('lang-code');
        if (langCodeEl) {
            langCodeEl.textContent = lang === 'es' ? 'EN' : 'ES';
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const textElement = document.querySelector('.text-typing');
        if (textElement && typingWords[lang]) {
            textElement.setAttribute('data-words', JSON.stringify(typingWords[lang]));
        }
    }

    applyLanguage(currentLang);

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(nextLang);
        });
    }

    /* ==========================================================================
       3. NAV MENÚ MOVIL (HAMBURGUESA)
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       4. EFECTO NAV CONTRAER AL SCROLL
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });



    /* ==========================================================================
       6. OBSERVADORES DE SCROLL (REVELAR ELEMENTOS & LINKS ACTIVOS)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    const sections = document.querySelectorAll('section');
    const navActiveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.35
    });

    sections.forEach(sec => navActiveObserver.observe(sec));

    /* ==========================================================================
       7. CARRUSEL HORIZONTAL & FILTRADO DE PROYECTOS
       ========================================================================== */
    const track = document.getElementById('project-carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const paginationContainer = document.getElementById('carousel-pagination');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = Array.from(document.querySelectorAll('.project-item'));

    if (track) {
        let isDown = false;
        let startX = 0;
        let scrollLeftStart = 0;
        let isDraggingMove = false;
        let activeFilter = 'all';

        // Obtener items visibles según filtro activo
        function getVisibleItems() {
            return projectItems.filter(item => {
                const category = item.getAttribute('data-category');
                return activeFilter === 'all' || category === activeFilter;
            });
        }

        // Renderizar puntos de paginación
        function updatePaginationDots() {
            if (!paginationContainer) return;
            paginationContainer.innerHTML = '';
            const visible = getVisibleItems();
            
            visible.forEach((item, index) => {
                const dot = document.createElement('span');
                dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Ir al proyecto ${index + 1}`);
                dot.addEventListener('click', () => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                });
                paginationContainer.appendChild(dot);
            });
            updateActiveDotAndArrows();
        }

        // Actualizar estado de flechas y punto activo según scroll
        function updateActiveDotAndArrows() {
            const visible = getVisibleItems();
            if (visible.length === 0) return;

            // Actualizar flechas de navegación
            if (prevBtn) {
                const isAtStart = track.scrollLeft <= 10;
                prevBtn.disabled = isAtStart;
                prevBtn.classList.toggle('disabled', isAtStart);
            }
            if (nextBtn) {
                const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 15;
                nextBtn.disabled = isAtEnd;
                nextBtn.classList.toggle('disabled', isAtEnd);
            }

            // Calcular índice del item más cercano
            let closestIndex = 0;
            let minDistance = Infinity;
            visible.forEach((item, idx) => {
                const distance = Math.abs(item.offsetLeft - track.offsetLeft - track.scrollLeft);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = idx;
                }
            });

            // Actualizar clase active en dots
            const dots = paginationContainer ? paginationContainer.querySelectorAll('.carousel-dot') : [];
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === closestIndex);
            });
        }

        // Navegación con flechas
        function scrollCarousel(direction) {
            const firstCard = track.querySelector('.project-item');
            const cardWidth = firstCard ? firstCard.offsetWidth : 380;
            const gap = 32; // 2rem
            const scrollAmount = (cardWidth + gap) * direction;
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => scrollCarousel(-1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => scrollCarousel(1));
        }

        // Arrastre con Mouse (Drag-to-Scroll con inercia suave)
        track.addEventListener('mousedown', (e) => {
            if (e.target.closest('.project-link') || e.target.closest('button')) return;
            isDown = true;
            isDraggingMove = false;
            track.classList.add('is-dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeftStart = track.scrollLeft;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.25;
            if (Math.abs(walk) > 5) {
                isDraggingMove = true;
            }
            track.scrollLeft = scrollLeftStart - walk;
        });

        window.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                track.classList.remove('is-dragging');
                setTimeout(() => { isDraggingMove = false; }, 50);
            }
        });

        // Prevenir click accidental si se estaba arrastrando
        track.addEventListener('click', (e) => {
            if (isDraggingMove) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);

        // Scroll listener para actualizar dots y flechas
        let scrollTimeout;
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateActiveDotAndArrows, 50);
        }, { passive: true });

        // Filtrado Dinámico
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                activeFilter = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    const isVisible = activeFilter === 'all' || category === activeFilter;
                    
                    if (isVisible) {
                        item.style.display = 'flex';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 30);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 250);
                    }
                });

                // Resetear scroll suavemente y actualizar paginación
                track.scrollTo({ left: 0, behavior: 'smooth' });
                setTimeout(updatePaginationDots, 260);
            });
        });

        // Inicializar
        updatePaginationDots();
        window.addEventListener('resize', updateActiveDotAndArrows);
    }

    /* ==========================================================================
       8. FORMULARIO DE CONTACTO & NOTIFICACIONES (TOAST)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('form-toast');

    if (contactForm && toast) {
        const btnSubmit = contactForm.querySelector('.btn-submit');
        const btnSubmitText = btnSubmit ? btnSubmit.querySelector('span') : null;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (btnSubmit) btnSubmit.disabled = true;
            const originalText = btnSubmitText ? btnSubmitText.textContent : '';
            if (btnSubmitText) {
                btnSubmitText.textContent = translations[currentLang]["form.sending"] || 'Enviando...';
            }
            const icon = btnSubmit.querySelector('i');
            if (icon) icon.className = 'fas fa-spinner fa-spin';

            setTimeout(() => {
                toast.classList.add('show');
                contactForm.reset();

                if (btnSubmit) btnSubmit.disabled = false;
                if (btnSubmitText) btnSubmitText.textContent = translations[currentLang]["form.submit"] || originalText;
                if (icon) icon.className = 'fas fa-paper-plane';

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 4500);

            }, 1200);
        });
    }

    /* ==========================================================================
       9. FONDO CANVAS DE PARTÍCULAS INTERACTIVAS
       ========================================================================== */
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        const maxParticles = 80;
        const connectionDistance = 120;
        const mouse = {
            x: null,
            y: null,
            radius: 150
        };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.radius = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? '#06b6d4' : '#a855f7';
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 4;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            update() {
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                this.x += this.vx;
                this.y += this.vy;

                if (mouse.x != null && mouse.y != null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        this.x += Math.cos(angle) * force * 1.1;
                        this.y += Math.sin(angle) * force * 1.1;
                    }
                }
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < maxParticles; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (connectionDistance - distance) / connectionDistance * 0.14;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        
                        const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        grad.addColorStop(0, hexToRGBA(particles[i].color, opacity));
                        grad.addColorStop(1, hexToRGBA(particles[j].color, opacity));
                        
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        }

        function hexToRGBA(hex, alpha) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                animate();
            }
        });
    }
});
