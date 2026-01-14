#!/bin/bash

# 🌬️ INSTALACIÓN Y VERIFICACIÓN DEL PORTAFOLIO
# Este script verifica que todos los archivos estén presentes

echo "=================================================="
echo "    🌬️ VERIFICADOR DE PORTAFOLIO PROFESIONAL"
echo "=================================================="
echo ""

# Array de archivos requeridos
REQUIRED_FILES=(
    "index.html"
    "styles.css"
    "script.js"
    "README.md"
    "CONFIGURACION_RAPIDA.md"
    "GUIA_CONFIGURACION.md"
    "EJEMPLOS_CONTENIDO.html"
    "VERIFICACION.html"
)

# Contador
FOUND=0
MISSING=0

echo "✓ Verificando archivos del proyecto..."
echo ""

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
        ((FOUND++))
    else
        echo "❌ FALTA: $file"
        ((MISSING++))
    fi
done

echo ""
echo "=================================================="

if [ $MISSING -eq 0 ]; then
    echo "✅ TODOS LOS ARCHIVOS PRESENTES ($FOUND/$FOUND)"
    echo ""
    echo "🚀 PRÓXIMOS PASOS:"
    echo "1. Abre VERIFICACION.html en tu navegador"
    echo "2. Lee CONFIGURACION_RAPIDA.md (5 minutos)"
    echo "3. Personaliza index.html con tu información"
    echo "4. Configura el sistema de emails"
    echo "5. ¡Comparte tu portafolio!"
    echo ""
    echo "💡 Para probar localmente:"
    echo "   python -m http.server 8000"
    echo "   Luego abre: http://localhost:8000"
else
    echo "❌ FALTAN $MISSING ARCHIVOS"
    echo "Por favor, verifica que todos estén descargados"
fi

echo ""
echo "=================================================="
