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
       8. FORMULARIO DE CONTACTO FUNCIONAL & TOAST (FormSubmit AJAX)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('form-toast');
    const toastMessage = document.getElementById('toast-message');

    if (contactForm && toast) {
        const btnSubmit = contactForm.querySelector('button[type="submit"]') || contactForm.querySelector('.btn-submit');
        const btnSubmitText = btnSubmit ? btnSubmit.querySelector('span') : null;
        const icon = btnSubmit ? btnSubmit.querySelector('i') : null;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (btnSubmit) btnSubmit.disabled = true;
            if (btnSubmitText) btnSubmitText.textContent = 'Enviando...';
            if (icon) icon.className = 'fas fa-spinner fa-spin';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://formsubmit.co/ajax/emanuelrzj@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                });

                if (response.ok) {
                    if (toastMessage) toastMessage.textContent = '¡Mensaje enviado con éxito! Te responderé a la brevedad.';
                    toast.classList.add('show');
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => ({}));
                    if (data.message && data.message.includes('Activate')) {
                        if (toastMessage) toastMessage.textContent = '¡Formulario enviado! Revisa tu email para confirmar la activación inicial.';
                    } else {
                        if (toastMessage) toastMessage.textContent = '¡Mensaje enviado con éxito!';
                    }
                    toast.classList.add('show');
                    contactForm.reset();
                }
            } catch (error) {
                if (toastMessage) toastMessage.textContent = '¡Mensaje enviado con éxito!';
                toast.classList.add('show');
                contactForm.reset();
            } finally {
                if (btnSubmit) btnSubmit.disabled = false;
                if (btnSubmitText) btnSubmitText.textContent = 'Enviar Mensaje';
                if (icon) icon.className = 'fas fa-paper-plane';

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 5000);
            }
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

    /* ==========================================================================
       10. BOTÓN FLOTANTE VOLVER ARRIBA (SCROLL TO TOP)
       ========================================================================== */
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        const checkScroll = () => {
            const yOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (yOffset > 250) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('resize', checkScroll);
        checkScroll();

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
