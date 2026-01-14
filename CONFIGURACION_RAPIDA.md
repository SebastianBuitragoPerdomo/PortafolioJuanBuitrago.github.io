# ⚙️ CONFIGURACIÓN RÁPIDA - 5 MINUTOS

## ✅ FORMULARIO CONFIGURADO CON FORMSUBMIT (PARÁMETROS BÁSICOS)

¡Excelente! El formulario está configurado exactamente según los parámetros oficiales de FormSubmit:

### 🔧 Configuración Actual:
```html
<form action="https://formsubmit.co/ductairescolombia@gmail.com" method="POST">
```

### 📋 Campos con name attributes (requeridos por FormSubmit):
- `name="name"` - Nombre completo
- `name="email"` - Correo electrónico  
- `name="phone"` - Teléfono (opcional)
- `name="subject"` - Motivo de consulta
- `name="message"` - Mensaje detallado

### 🚀 Para activar el formulario:
1. **Envía el formulario una vez** desde tu sitio web
2. **Revisa tu email** `ductairescolombia@gmail.com`
3. **Confirma el enlace** que te envía FormSubmit
4. **¡Listo!** Los formularios funcionarán automáticamente

### 💡 ¿Por qué funciona así?
- ✅ **Sin registro** - FormSubmit no requiere cuenta
- ✅ **Sin configuración adicional** - Solo el action y name attributes
- ✅ **Emails directos** - Llegan a tu bandeja de entrada
- ✅ **Gratis** - Sin costos para uso básico

---

## Otras opciones (si quieres cambiar)

### Opción A: Formspree (Más fácil que EmailJS)

1. Ve a: https://formspree.io
2. Haz clic en "Sign Up"
3. Regístrate con tu email
4. Crea un nuevo formulario (New Project)
5. Copia el ID que te dan (ej: `xyzabc123`)
6. Abre `script.js` y busca la línea ~96:

```javascript
const formspreeId = 'your_formspree_id';
```

7. Reemplaza con tu ID:
```javascript
const formspreeId = 'xyzabc123';
```

8. ¡LISTO! El formulario funciona.

---

### Opción B: EmailJS (Más control)

1. Ve a: https://www.emailjs.com
2. Crea una cuenta
3. Ve a "Email Templates" y crea una plantilla
4. Obtén tu: Service ID, Template ID, Public Key
5. Abre `script.js` y busca las líneas 10-15:

```javascript
const EMAIL_CONFIG = {
    serviceID: 'service_id_aqui',
    templateID: 'template_id_aqui',
    publicKey: 'public_key_aqui'
};
```

6. Reemplaza con tus datos:
```javascript
const EMAIL_CONFIG = {
    serviceID: 'service_xxxxxxx',
    templateID: 'template_xxxxxxx',
    publicKey: 'xxxxxxxxxxxxxx'
};
```

7. También busca la línea ~83 y cambia:
```javascript
to_email: 'tu-email@example.com'
```

8. ¡LISTO!

---

## Paso 2: Personalizar Contenido

### 2.1 Cambiar Nombre y Título
Abre `index.html` y busca (línea ~58):
```html
<p class="subtitle">Técnico Especialista en Aire Acondicionado</p>
```
Reemplaza con tu nombre/título.

### 2.2 Cambiar Foto de Perfil
Opción A - Imagen fija:
Busca (línea ~58):
```html
<img id="profileImg" src="https://via.placeholder.com/250?text=Tu+Foto" alt="Foto de perfil">
```
Reemplaza `src` con tu URL.

Opción B - Cambiar dinámicamente:
Simplemente haz clic en la foto en el navegador y selecciona una imagen.

### 2.3 Cambiar Información de Contacto
Busca en `index.html` (línea ~360):
```html
<p class="value">+57 300 1234567</p>
<p class="value">tecnico@example.com</p>
<p class="value">Tu Ciudad, Tu País</p>
```
Reemplaza con tu información real.

### 2.4 Cambiar Redes Sociales
Busca (línea ~370):
```html
<a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
```
Reemplaza `#` con tus URLs:
```html
<a href="https://wa.me/573001234567" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
```

---

## Paso 3: Personalizar Colores (Opcional)

Abre `styles.css` y busca (líneas 4-14):
```css
:root {
    --primary-color: #1a3a52;      /* Azul marino */
    --secondary-color: #2c5f8d;    /* Azul profesional */
    --accent-color: #e74c3c;       /* Rojo */
}
```

Reemplaza los códigos hexadecimales con tus colores.

**Opciones sugeridas:**
- Verde profesional: `#1b4d3e` y `#2d7a5d`
- Gris profesional: `#333333` y `#555555`
- Azul oscuro: `#0a2540` y `#1a5276`

---

## Paso 4: Probar Localmente

En tu terminal:
```bash
# En Windows - abre una terminal en la carpeta del proyecto y ejecuta:
python -m http.server 8000

# En macOS/Linux:
python3 -m http.server 8000
```

Luego abre: http://localhost:8000

---

## Paso 5: Desplegar Online (Elige una opción)

### Opción A: GitHub Pages (GRATIS)

1. Crea una cuenta en https://github.com
2. Crea un nuevo repositorio: `tu-usuario.github.io`
3. Sube los archivos a ese repositorio
4. Tu sitio estará en: `https://tu-usuario.github.io`

### Opción B: Netlify (GRATIS con SSL)

1. Ve a https://netlify.com
2. Conecta tu repositorio GitHub
3. ¡Listo! Netlify despliega automáticamente

### Opción C: Tu servidor (Si tienes hosting)

1. Sube los archivos vía FTP a `/public_html`
2. Accede con tu dominio

---

## ✅ Checklist de Configuración

- [ ] Formulario configurado (Formspree o EmailJS)
- [ ] Nombre y título personalizados
- [ ] Foto de perfil cargada
- [ ] Información de contacto actualizada
- [ ] Redes sociales vinculadas
- [ ] Contenido de "Acerca de mí" personalizado
- [ ] Experiencia laboral actualizada
- [ ] Servicios ajustados a tu negocio
- [ ] Colores personalizados (opcional)
- [ ] Sitio desplegado online

---

## 🧪 Prueba el Formulario

1. Ve a tu sitio
2. Baja a la sección "Contáctame"
3. Llena el formulario con:
   - Nombre: `Test`
   - Email: `tu-email@ejemplo.com`
   - Motivo: Selecciona uno
   - Mensaje: `Mensaje de prueba`
4. Haz clic en "Enviar Solicitud"
5. Revisa tu email (incluye spam)

---

## 🎉 ¡Listo!

Tu portafolio profesional está completamente funcional.

**Tips finales:**
- Responde rápido a los mensajes
- Mantén la información actualizada
- Usa una foto profesional
- Destaca tus mejores trabajos
- Añade testimonios si puedes

---

¿Preguntas? Revisa la guía completa en `GUIA_CONFIGURACION.md`
