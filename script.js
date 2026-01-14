// =====================================================
// INICIALIZACIÓN Y CONFIGURACIÓN GENERAL
// =====================================================

// =====================================================
// MENÚ HAMBURGUESA - MÓVIL
// =====================================================

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Alternar menú hamburguesa
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

// =====================================================
// NAVEGACIÓN ACTIVA POR SCROLL
// =====================================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================================================
// SCROLL SUAVE PERSONALIZADO
// =====================================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================================
// CARGA DE IMAGEN DE PERFIL
// =====================================================

const profileImg = document.getElementById('profileImg');

// Permitir cambiar la imagen de perfil
profileImg.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                profileImg.src = event.target.result;
                localStorage.setItem('profileImage', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    
    input.click();
});

// Cargar imagen guardada
window.addEventListener('load', () => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profileImg.src = savedImage;
    }
});

// =====================================================
// ANIMACIONES AL SCROLL
// =====================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas
const cards = document.querySelectorAll('.skill-card, .service-card, .timeline-item');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// =====================================================
// FUNCIONES AUXILIARES
// =====================================================

// Copiar texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        mostrarMensaje('¡Copiado al portapapeles!', 'success');
    });
}

// Detectar dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// =====================================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    // Otros inicios si es necesario
    console.log('Portafolio cargado correctamente');
    
    // Detectar si es móvil
    if (isMobileDevice()) {
        document.body.classList.add('mobile-device');
    }
});

// =====================================================
// EVENTOS ADICIONALES
// =====================================================

// Prevenir comportamiento por defecto en enlaces sociales
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Aquí puedes agregar URLs reales de redes sociales
        // Ejemplo: window.open('https://wa.me/1234567890', '_blank');
        alert('Por favor, configura los enlaces de redes sociales con tus perfiles reales');
    });
});

// Agregar clase activa al nav al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// =====================================================
// COMPATIBILIDAD Y POLYFILLS
// =====================================================

// Polyfill para scrollIntoView si es necesario
if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = function(options) {
        const element = this;
        const rect = element.getBoundingClientRect();
        const targetPosition = window.pageYOffset + rect.top - 100;
        
        window.scrollTo({
            top: targetPosition,
            behavior: options?.behavior || 'auto'
        });
    };
}

// =====================================================
// MODO OSCURO (OPCIONAL)
// =====================================================

// Descomentar si deseas añadir tema oscuro
/*
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
    document.body.classList.add('dark-mode');
}
*/
