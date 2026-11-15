/* Edita aquí precios, planes, enlaces e imágenes. No requiere servidor ni compilación. */
window.BLINK = {
 whatsapp: '51927738843', instagram: 'https://www.instagram.com/agenciablink_/',
 frases: [['Tu próximo paso,','nuestro próximo reto'],['Llegó el momento','de Blinkearte'],['¿Estás listo','para el cambio?']],
 clientes: [
 ['Cash Sol','cash-sol'],['TRBull','trbull'],['Marca cliente','marca-cliente'],['El Bandido','el-bandido'],['El Sabor del Llanero','sabor-del-llanero'],['La Charcutería de Lima','charcuteria-lima'],['Ahumados Don Jocé','ahumados-don-joce'],['DMEMO','dmemo'],['Pioky’s','piokys'],['Dutti Pets','dutti-pets'],['Agencia Blink','blink']
 ].map(([nombre,archivo])=>({nombre,imagen:'img/clientes/'+archivo+'.webp',url:'https://www.instagram.com/'})),
 servicios: {
 social:{tag:'PAQUETE DE REDES SOCIALES',titulo:'Social media con el estilo de tu marca',descripcion:'Manejo mensual de tu social media, tanto visual como audiovisual.',imagen:'img/social-media.webp',planes:[
 {nombre:'Blink Xpress',precio:'249.99',periodo:'Plan de semana y media',items:['3 posts y 3 stories','2 videos hechos con IA','Creación de campaña en Meta Ads','Grilla de contenido y moodboard de la marca','Creación de guiones y personal para los videos','Grabación en punto de venta']},
 {nombre:'Blink Impulsa',precio:'399.99',periodo:'Plan mensual',items:['8 posts y 8 stories','3 videos','Creación de campaña en Meta Ads','Grilla de contenido y moodboard de la marca','Creación de guiones y personal para los videos','Grabación en punto de venta']},
 {nombre:'Blink Actívate',precio:'549.99',periodo:'Plan mensual',items:['10 posts y 10 stories','5 videos','Creación de campaña en Meta Ads','Grilla de contenido y moodboard de la marca','Creación de guiones y personal para los videos','Grabación en punto de venta']},
 {nombre:'Blink Despega',precio:'849.99',periodo:'Plan mensual',items:['10 posts y 10 stories','5 videos','Creación de campaña en Meta Ads','Grilla de contenido y moodboard de la marca','Creación de guiones y personal para los videos','Grabación en punto de venta','Tienda virtual para tu negocio, renovable con el mes']},
 {nombre:'Blink Pro',precio:'1199.99',periodo:'Plan mensual',items:['15 posts y 15 stories','8 videos','Creación de campaña en Meta Ads','Grilla de contenido y moodboard de la marca','Creación de guiones y personal para los videos','Grabación en punto de venta','Tienda virtual renovable con el mes','Dominio personalizado']}
 ]},
 web:{tag:'PÁGINA WEB PROFESIONAL',titulo:'Tu negocio, a un clic de crecer',descripcion:'Una web completa, moderna y adaptable a celular y computadora, diseñada 100% en base a tu marca.',imagen:'img/pagina-web.webp',planes:[{nombre:'Página Web Profesional',precio:'399.99',desde:true,periodo:'Entrega en 24 horas',items:['Dominio personalizado (.com o .pe) y hosting','Diseño responsive para celular y computadora','Diseño 100% personalizado en base a tu marca','Carga rápida','Optimización SEO básica','Integración de Google Analytics']}]},
 carta:{tag:'CARTA DIGITAL',titulo:'Del antojo al pedido, en un clic',descripcion:'Diseño de carta modelo app de pedidos, con carrito personalizado y una experiencia fácil para tus clientes.',imagen:'img/carta-digital.webp',planes:[{nombre:'Blink Menú',precio:'120.00',desde:true,periodo:'Pago único · Sin renovación',items:['Más de 100 ítems','Carrito personalizado','Diseño responsive','Banner de bienvenida','Modelo app de pedidos']}]},
 marca:{tag:'CREACIÓN DE MARCA',titulo:'Una marca que se queda en la mente',descripcion:'Dale identidad a tu negocio con una marca que refleje su esencia.',imagen:'img/creacion-marca.webp',planes:[{nombre:'Identidad de marca',precio:'120.00',desde:true,periodo:'Diseño de identidad',items:['2 propuestas de marca para feedback','Creación de manual de marca','Papelería corporativa','Archivos SVG, JPG, PNG y AI','App de pedidos gratis por 1 mes']}]},
 papeleria:{tag:'PAPELERÍA CORPORATIVA',titulo:'Tu marca también se lleva en las manos',descripcion:'Piezas impresas con diseño personalizado para que tu negocio se haga notar.',imagen:'img/creacion-marca.webp',planes:[
 {nombre:'Millar de tarjetas',precio:'80.00',desde:true,periodo:'Entrega en 24 horas',items:['1,000 tarjetas de 9 × 5.5 cm','Troqueladas','Acabado en brillo o mate','Diseño por ambas caras','Impresión full color']},
 {nombre:'Millar de volantes',precio:'85.00',desde:true,periodo:'Entrega en 24 horas',items:['1,000 volantes de 10.5 × 16 cm','Papel couché de 115 g','Formato 1/4 de oficio','Diseño doble cara','Impresión full color en ambas caras']},
 {nombre:'Rollscreen',precio:'135.00',periodo:'Entrega el mismo día',items:['Medida de 2 × 1 m','Banner grueso','Diseño personalizado acorde a tu marca','Incluye estuche']},
 {nombre:'Etiquetas',precio:'75.00',desde:true,periodo:'Entrega según cantidad',items:['Troqueladas y laminadas','Acabado brillo o mate','Medida personalizada','Cantidad personalizada','Diseño incluido']}
 ]}
 }
};

// Fondos que continúan el color de los originales, sin deformar los logos.
const fondosClientes={'cash-sol':'#ffffff','trbull':'#010101','marca-cliente':'#0057bd','el-bandido':'#080808','sabor-del-llanero':'#0a0603','charcuteria-lima':'#fcfeff','ahumados-don-joce':'#fbf4e8','dmemo':'#ffcf00','piokys':'#683b20','dutti-pets':'#ffffff','blink':'#2b3ff5'};
BLINK.clientes.forEach(c=>{const key=c.imagen.split('/').pop().replace('.webp','');c.fondo=fondosClientes[key];if(key==='sabor-del-llanero')c.escala=1.1;});

BLINK.clientes.forEach(c=>{const key=c.imagen.split('/').pop().replace(/\.(webp|png)$/,'');if(['dmemo','piokys','ahumados-don-joce','charcuteria-lima'].includes(key))c.imagen='img/clientes/'+key+'.png';if(key==='piokys')c.fondo='#008b25';if(key==='ahumados-don-joce')c.fondo='#203e1c';if(key==='dmemo')c.fondo='#ffcf00';});
