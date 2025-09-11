// 等待 DOM 加載完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 平滑滾動功能
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // 檢查是否為頁內錨點連結（以 # 開頭）
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100; // 考慮導航欄高度
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // 如果是外部頁面連結（如 products.html），允許正常跳轉
            // 不需要 preventDefault()，讓瀏覽器正常處理
        });
    });

    // 導航欄滾動效果
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 添加背景模糊效果
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(207, 207, 207, 0.9)';
        } else {
            navbar.style.background = 'rgba(207, 207, 207, 0.54)';
        }
        
        lastScrollTop = scrollTop;
    });

    // 滾動動畫效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 為需要動畫的元素添加觀察
    const animateElements = document.querySelectorAll('.product-info, .about-text, .feature-item, .partnership-text');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 浮動元素的動畫增強
    const floatingCircles = document.querySelectorAll('.floating-circle');
    
    floatingCircles.forEach((circle, index) => {
        // 為每個圓圈添加不同的動畫延遲
        circle.style.animationDelay = `${index * 0.5}s`;
        
        // 添加滑鼠互動效果
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 產品圖片懸停效果
    const productImage = document.querySelector('.product-img');
    if (productImage) {
        productImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        productImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // 品牌圓圈動畫效果
    const brandCircle = document.querySelector('.brand-circle');
    if (brandCircle) {
        brandCircle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        brandCircle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // 導航連結懸停效果增強
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // 滾動進度指示器
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #96ED9B, #A61ED0);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });

    // 視差滾動效果
    const parallaxElements = document.querySelectorAll('.floating-elements, .hero-avocado');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });

    // 文字打字機效果（可選）
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 為 CTA 標題添加打字機效果
    const ctaTitle = document.querySelector('.cta-title');
    if (ctaTitle && window.innerWidth > 768) {
        const originalText = ctaTitle.innerHTML;
        ctaTitle.innerHTML = '';
        
        // 當元素進入視窗時開始打字效果
        const ctaObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(ctaTitle, originalText, 30);
                    ctaObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        ctaObserver.observe(ctaTitle);
    }

    // 響應式導航菜單（移動端）
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const navMenu = document.querySelector('.nav-menu');
            const navContainer = document.querySelector('.nav-container');
            
            // 創建漢堡菜單按鈕
            if (!document.querySelector('.mobile-menu-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-menu-toggle';
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    display: none;
                    background: none;
                    border: none;
                    font-size: 24px;
                    color: #000;
                    cursor: pointer;
                    padding: 10px;
                `;
                
                mobileToggle.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                });
                
                navContainer.appendChild(mobileToggle);
            }
            
            // 移動端樣式
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            mobileToggle.style.display = 'block';
            
            navMenu.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(207, 207, 207, 0.95);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 20px;
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
                pointer-events: none;
            `;
            
            navMenu.classList.remove('active');
        } else {
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.style.display = 'none';
            }
            
            const navMenu = document.querySelector('.nav-menu');
            navMenu.style.cssText = '';
            navMenu.classList.remove('active');
        }
    };

    // 初始化移動端菜單
    createMobileMenu();
    
    // 監聽視窗大小變化
    window.addEventListener('resize', createMobileMenu);

    // 添加 CSS 類來控制移動端菜單顯示
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu.active {
            transform: translateY(0) !important;
            opacity: 1 !important;
            pointer-events: auto !important;
        }
    `;
    document.head.appendChild(style);

    // 性能優化：節流滾動事件
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // 應用節流到滾動事件
    const throttledScrollHandler = throttle(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(207, 207, 207, 0.9)';
        } else {
            navbar.style.background = 'rgba(207, 207, 207, 0.54)';
        }
    }, 16); // 約 60fps

    window.removeEventListener('scroll', throttledScrollHandler);
    window.addEventListener('scroll', throttledScrollHandler);

    console.log('Avocado AI 網站已成功加載！');
});

