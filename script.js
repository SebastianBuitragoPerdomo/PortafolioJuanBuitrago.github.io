// =====================================================
// INICIALIZACIÓN Y CONFIGURACIÓN GENERAL
// =====================================================

// Configuración de EmailJS - IMPORTANTE: Reemplaza con tus datos
// Para obtener estos datos, crea una cuenta en https://www.emailjs.com/
const EMAIL_CONFIG = {
    serviceID: 'service_id_aqui',      // Reemplaza con tu Service ID
    templateID: 'template_id_aqui',    // Reemplaza con tu Template ID
    publicKey: 'public_key_aqui'       // Reemplaza con tu Public Key
};

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
// FORMULARIO DE CONTACTO
// =====================================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Inicializar EmailJS
function initEmailJS() {
    emailjs.init(EMAIL_CONFIG.publicKey);
}

// Manejar envío del formulario
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim() || 'No proporcionado',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim()
    };

    // Validación básica
    if (!validateForm(formData)) {
        return;
    }

    // Mostrar estado de carga
    const submitBtn = contactForm.querySelector('.submit-button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    try {
        // Opción 1: Usar EmailJS (requiere configuración)
        if (EMAIL_CONFIG.serviceID !== 'service_id_aqui') {
            await enviarConEmailJS(formData);
        } else {
            // Opción 2: Usar Formspree (más fácil, sin configuración)
            await enviarConFormspree(formData);
        }

        // Mostrar mensaje de éxito
        mostrarMensaje('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
        contactForm.reset();

    } catch (error) {
        console.error('Error al enviar:', error);
        mostrarMensaje('Error al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Validar formulario
function validateForm(data) {
    if (!data.name || data.name.length < 3) {
        mostrarMensaje('El nombre debe tener al menos 3 caracteres.', 'error');
        return false;
    }

    if (!validateEmail(data.email)) {
        mostrarMensaje('Por favor ingresa un correo electrónico válido.', 'error');
        return false;
    }

    if (!data.subject) {
        mostrarMensaje('Por favor selecciona un motivo de consulta.', 'error');
        return false;
    }

    if (!data.message || data.message.length < 10) {
        mostrarMensaje('El mensaje debe tener al menos 10 caracteres.', 'error');
        return false;
    }

    return true;
}

// Validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Opción 1: Enviar con EmailJS
async function enviarConEmailJS(formData) {
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'tu-email@example.com' // Cambia esto con tu email
    };

    await emailjs.send(
        EMAIL_CONFIG.serviceID,
        EMAIL_CONFIG.templateID,
        templateParams
    );
}

// Opción 2: Enviar con Formspree (más fácil, sin configuración backend)
async function enviarConFormspree(formData) {
    const formspreeId = 'your_formspree_id'; // Obtén esto en https://formspree.io/
    const url = `https://formspree.io/f/${formspreeId}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
        })
    });

    if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
    }
}

// Mostrar mensaje
function mostrarMensaje(mensaje, tipo) {
    formMessage.textContent = mensaje;
    formMessage.className = `form-message ${tipo}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

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
    // Inicializar EmailJS
    initEmailJS();

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
