# 🌬️ Portafolio Profesional - Técnico de Aire Acondicionado

Un portafolio moderno, profesional y totalmente responsive diseñado para técnicos especialistas en aire acondicionado. Funciona como catálogo y hoja de vida simultáneamente.

## ✨ Características Principales

### 🎨 Diseño
- **Interfaz profesional** con colores serios (azul marino y tonos corporativos)
- **Totalmente responsive** - funciona perfectamente en móviles, tablets y escritorio
- **Animaciones suaves** y transiciones elegantes
- **Scroll fluido** tanto táctil como con mouse
- **Foto de perfil circular** con opción de carga personalizada

### 📱 Secciones Principales
1. **Inicio** - Presentación profesional con foto de perfil
2. **Acerca de mí** - Biografía profesional y estadísticas
3. **Habilidades** - Tarjetas con 6 competencias técnicas principales
4. **Experiencia Laboral** - Timeline interactivo de historial laboral
5. **Servicios** - Catálogo detallado de servicios ofrecidos
6. **Contáctame** - Formulario completo con validación

### 📧 Sistema de Contacto
- Formulario con campos para: nombre, email, teléfono, motivo y mensaje
- **Dos opciones de envío de emails:**
  - **EmailJS** - Para soluciones más personalizadas
  - **Formspree** - Para soluciones rápidas sin backend

### 🎯 Ventajas Técnicas
- HTML5 semántico
- CSS3 con variables para fácil personalización
- JavaScript vanilla (sin dependencias externas)
- Validación de formularios integrada
- Almacenamiento local para imagen de perfil
- Compatible con todos los navegadores modernos

---

## 🚀 Instalación Rápida

### Opción 1: Usar Formspree (MÁS FÁCIL - Recomendado)

1. **Crea una cuenta en Formspree:**
   - Ve a https://formspree.io/
   - Regístrate con tu email
   - Crea un nuevo formulario para obtener tu `form_id`

2. **Actualiza el archivo `script.js`:**
   ```javascript
   // Busca esta línea (aproximadamente línea 96):
   const formspreeId = 'your_formspree_id';
   
   // Reemplázala con tu ID de Formspree:
   const formspreeId = 'xyzabc123';  // Ejemplo
   ```

3. **Listo!** El formulario está funcionando.

---

### Opción 2: Usar EmailJS (MÁS CONTROL)

1. **Crea una cuenta en EmailJS:**
   - Ve a https://www.emailjs.com/
   - Regístrate gratuitamente
   - En el dashboard, obtén:
     - Service ID
     - Template ID
     - Public Key

2. **Crea una plantilla de email en EmailJS:**
   - En el dashboard, ve a "Email Templates"
   - Crea una nueva plantilla con estos campos:
     ```
     {{from_name}} - {{subject}}
     
     Email: {{from_email}}
     Teléfono: {{phone}}
     
     Mensaje:
     {{message}}
     ```

3. **Actualiza el archivo `script.js`:**
   ```javascript
   // Busca esta sección (líneas 10-15):
   const EMAIL_CONFIG = {
       serviceID: 'service_id_aqui',      // Tu Service ID
       templateID: 'template_id_aqui',    // Tu Template ID
       publicKey: 'public_key_aqui'       // Tu Public Key
   };
   
   // También actualiza el email destino (línea 83):
   to_email: 'tu-email@example.com'  // Tu email
   ```

---

## ✏️ Personalización

### Cambiar Contenido de Texto

1. **Edita el archivo `index.html`:**
   - Busca las secciones correspondientes
   - Reemplaza el texto con tu información:
     - Nombre y título profesional
     - Descripción acerca de ti
     - Experiencia laboral
     - Servicios que ofreces
     - Datos de contacto

### Cambiar Imagen de Perfil

**Opción 1 - Estática:**
```html
<!-- En index.html, busca esta línea (aproximadamente línea 58): -->
<img id="profileImg" src="https://via.placeholder.com/250?text=Tu+Foto" alt="Foto de perfil">

<!-- Reemplaza la URL con tu imagen: -->
<img id="profileImg" src="ruta/a/tu/foto.jpg" alt="Foto de perfil">
```

**Opción 2 - Dinámica (Click para cambiar):**
- Simplemente haz clic en la foto de perfil
- Selecciona una imagen
- Se guardará en el navegador automáticamente

### Personalizar Colores

En `styles.css`, busca la sección de variables (líneas 4-14):

```css
:root {
    --primary-color: #1a3a52;      /* Azul marino - Cambiar aquí */
    --secondary-color: #2c5f8d;    /* Azul profesional */
    --accent-color: #e74c3c;       /* Rojo enfático */
    /* ... más colores ... */
}
```

**Paletas de colores sugeridas para profesionales:**
- Azul & Gris: `#1a3a52` y `#5a7a9a`
- Verde & Gris: `#1b4d3e` y `#2d7a5d`
- Negro & Oro: `#1a1a1a` y `#d4af37`

### Actualizar Redes Sociales

En `index.html` (línea ~370), busca:
```html
<div class="social-links">
    <a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
    <a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
    <!-- ... etc ... -->
</div>
```

Reemplaza los `#` con tus URLs:
```html
<a href="https://wa.me/573001234567" title="WhatsApp">
<a href="https://facebook.com/tuPerfil" title="Facebook">
<a href="https://instagram.com/tuPerfil" title="Instagram">
<a href="https://linkedin.com/in/tuPerfil" title="LinkedIn">
```

---

## 📋 Estructura de Archivos

```
.
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS completos
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
└── LICENSE             # Licencia del proyecto
```

---

## 🔧 Funcionalidades Técnicas

### Validación de Formulario
- Valida nombre (mínimo 3 caracteres)
- Valida email (formato correcto)
- Valida selección de motivo
- Valida mensaje (mínimo 10 caracteres)

### Responsive Design
- **Desktop** (1024px+): Diseño completo en 2 columnas
- **Tablet** (768px - 1023px): Layout adaptado
- **Móvil** (480px - 767px): Una columna, menú hamburguesa
- **Móvil pequeño** (<480px): Optimizado para pantallas pequeñas

### Interactividad
- Menú hamburguesa en móvil
- Navegación activa por sección
- Scroll suave al hacer clic
- Animaciones al entrar en vista
- Scroll bar personalizado

---

## 🌐 Despliegue

### En GitHub Pages (Gratis)

1. Sube los archivos a un repositorio en GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Elige "main" y "/root"
5. Tu sitio estará en: `https://usuario.github.io/repositorio/`

### En Netlify (Gratis con SSL)

1. Ve a https://netlify.com
2. Conecta tu repositorio GitHub
3. Netlify despliega automáticamente en cada push

### En tu propio servidor

1. Descarga los archivos
2. Sube a `/public_html` de tu hosting
3. Accede a través de tu dominio

---

## 🎓 Consejos Profesionales

### Para mejor conversión:
- ✅ Usa una foto profesional de buena calidad
- ✅ Destaca tus servicios más populares
- ✅ Añade testimonios de clientes (opcional)
- ✅ Incluye números y estadísticas
- ✅ Responde rápido a los mensajes

### SEO Básico:
- Actualiza el `<title>` en index.html
- Usa palabras clave en tu descripción
- Añade meta descriptions
- Implementa schema.org si necesitas

### Analytics (Opcional):
- Añade Google Analytics
- Usa Google Search Console
- Monitorea conversiones

---

## 📱 Compatibilidad

✅ Chrome/Chromium (v90+)
✅ Firefox (v88+)
✅ Safari (v14+)
✅ Edge (v90+)
✅ Opera (v76+)
✅ Navegadores móviles modernos

---

## 🚨 Solución de Problemas

### El formulario no envía mensajes
- **Solución:** Verifica que configuraste correctamente EmailJS o Formspree
- Abre la consola (F12) y busca mensajes de error

### La foto de perfil no se carga
- **Solución:** Verifica la URL de la imagen
- Asegúrate que la URL sea correcta y accesible

### El menú no responde en móvil
- **Solución:** Limpia la caché del navegador (Ctrl+Shift+Del)
- Recarga la página

### Los emails no llegan
- **Solución:** Revisa tu carpeta de spam
- Verifica que configuraste correctamente el email destino
- Prueba con Formspree que es más simple

---

## 📞 Soporte

Si encuentras problemas:

1. **Revisa la consola** (F12 → Console) para mensajes de error
2. **Verifica la configuración** de EmailJS o Formspree
3. **Comprueba la sintaxis** del HTML si editaste manualmente

---

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT. Úsalo libremente en tus proyectos profesionales.

---

## 🎉 ¡Listo para Usar!

Tu portafolio profesional está 100% funcional y listo para mostrar a tus clientes.

**Próximos pasos:**
1. ✏️ Personaliza el contenido
2. 📧 Configura el envío de emails
3. 🖼️ Añade tu foto de perfil
4. 🚀 Despliega online
5. 📣 Comparte con tus clientes

---

**Creado con ❤️ para profesionales del aire acondicionado**
