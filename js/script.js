// Ink Mirror — JavaScript для лендинга
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navLinks.style.gap = '16px';
                navLinks.style.zIndex = '1000';
            }
        });
        
        // Закрытие меню при клике на ссылку
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });
        
        // Автоматическое скрытие/показ меню при изменении размера окна
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.style.display = '';
                navLinks.style.position = '';
                navLinks.style.top = '';
                navLinks.style.left = '';
                navLinks.style.width = '';
                navLinks.style.backgroundColor = '';
                navLinks.style.flexDirection = '';
                navLinks.style.padding = '';
                navLinks.style.boxShadow = '';
                navLinks.style.gap = '';
            }
        });
    }
    
    // FAQ аккордеон
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            
            // Закрываем все ответы
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
                ans.previousElementSibling.querySelector('::after')?.style.transform = 'rotate(0deg)';
            });
            
            // Открываем текущий, если был закрыт
            if (!isOpen) {
                answer.style.display = 'block';
                this.querySelector('::after')?.style.transform = 'rotate(45deg)';
            }
        });
        
        // По умолчанию открываем первый FAQ
        if (question === faqQuestions[0]) {
            question.nextElementSibling.style.display = 'block';
        }
    });
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация при скролле
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за секциями
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Таймер для статистики (демо)
    const statNumbers = document.querySelectorAll('.stat-number');
    const statValues = [1000, 4.8, 98];
    
    statNumbers.forEach((stat, index) => {
        if (stat.textContent.includes('+') || stat.textContent.includes('★') || stat.textContent.includes('%')) {
            return; // Пропускаем уже заполненные
        }
        
        let startValue = 0;
        const endValue = statValues[index];
        const duration = 2000;
        const increment = endValue / (duration / 16); // 60 FPS
        
        const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(timer);
            }
            
            if (index === 0) {
                stat.textContent = Math.floor(startValue) + '+';
            } else if (index === 1) {
                stat.textContent = startValue.toFixed(1) + '★';
            } else {
                stat.textContent = Math.floor(startValue) + '%';
            }
        }, 16);
    });
    
    // Копирование текста (для будущих функций)
    console.log('Ink Mirror лендинг загружен!');
});