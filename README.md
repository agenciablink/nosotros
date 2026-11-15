# Agencia Blink — Web lista para GitHub Pages

Sitio estático, sin instalaciones ni compilación.

## Publicar
1. Descomprime el ZIP.
2. Sube el contenido de esta carpeta a la raíz de tu repositorio: index.html, css, datos, js, img y .nojekyll.
3. En GitHub, entra a Settings → Pages → Deploy from a branch.
4. Selecciona main y / (root), guarda y espera la publicación.

No subas el ZIP sin descomprimir. Las rutas son relativas para que funcione también en repositorios con subcarpeta.

## Archivos
- index.html: estructura del diseño aprobado.
- css/style.css: diseño responsive, textura, papel rasgado y animaciones.
- datos/contenido.js: planes, precios, beneficios, WhatsApp, frases y enlaces de clientes.
- js/app.js: selección de servicios/planes, animaciones y formulario hacia WhatsApp.
- img/: imágenes y logos incluidos.

## Editar
Abre datos/contenido.js para cambiar precios, beneficios, número o enlaces. Cada cliente tiene su propia propiedad url. Actualmente los once logos enlazan a https://www.instagram.com/ según la indicación provisional. El nombre “Marca cliente” identifica el logo azul cuya marca no se especificó; puedes cambiarlo en ese archivo.

WhatsApp: +51 927 738 843. El formulario prepara el mensaje y abre WhatsApp; el visitante revisa y envía. No almacena datos en un servidor.

El banner mensual mantiene el texto aprobado “desde S/399 al mes”; los selectores muestran los precios exactos indicados (Impulsa: S/399.99). No se añade inversión publicitaria a los precios indicados.

Las fotos de los servicios se conservan completas. Los logos se ajustan sin deformarse en casillas iguales. El carrusel se pausa al pasar el cursor o enfocar con teclado. Se respeta la preferencia de movimiento reducido.

Las fuentes Barlow Condensed y DM Sans se cargan desde Google Fonts; si no hay conexión, se usan fuentes de respaldo. No se incluye un ID inventado de Google Analytics: para medir visitas, agrega tu ID de medición real cuando lo tengas.

## Animaciones y rendimiento
Incluye frases del inicio con entrada lateral, franja verde y logos hacia la derecha, aparición suave de secciones, transición de servicios y planes, respuesta al pasar sobre botones y logos, zoom sutil del banner y entrada inicial del botón de WhatsApp. Sin librerías de animación, video de fondo ni canvas. Los carruseles se pausan fuera de pantalla y al ocultar la pestaña; el usuario puede reducir el movimiento desde su sistema. No requiere procesamiento de servidor en GitHub Pages.

Los botones “Mira una demo aquí!” solicitan la demo del servicio por WhatsApp. Para enlazar una demo publicada, agrega demoUrl al servicio correspondiente en datos/contenido.js. Los logos incluyen señal de clic y fondo de su marca, editable con la propiedad fondo.
