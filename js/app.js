'use strict';
const $=s=>document.querySelector(s),config=window.BLINK;
const wa=text=>'https://wa.me/'+config.whatsapp+'?text='+encodeURIComponent(text);
let selectedService='social',selectedPlan=1;
function renderPlan(index){
 selectedPlan=index;const service=config.servicios[selectedService],plan=service.planes[index];
 document.querySelectorAll('.plan-tab').forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-pressed',String(i===index));});
 const detail=$('#plan-detail');detail.replaceChildren();
 const title=document.createElement('h4');title.textContent=plan.nombre;
 const price=document.createElement('div');price.className='plan-price';price.textContent=(plan.desde?'Desde ':'')+'S/ '+plan.precio;
 const period=document.createElement('p');period.className='plan-period';period.textContent=plan.periodo;
 const list=document.createElement('ul');list.className='plan-features';plan.items.forEach(item=>{const li=document.createElement('li');li.textContent=item;list.append(li)});
 detail.append(title,price,period,list);
 $('#service-cta').textContent='Quiero '+plan.nombre+' →';$('#service-cta').href=wa('Hola Blink, quiero información sobre '+plan.nombre+' (S/ '+plan.precio+').');$('#service-cta').target='_blank';$('#service-cta').rel='noopener';
}
function renderService(key){
 selectedService=key;const s=config.servicios[key];
 document.querySelectorAll('[data-s]').forEach(b=>{const yes=b.dataset.s===key;b.classList.toggle('active',yes);b.setAttribute('aria-selected',String(yes));b.tabIndex=yes?0:-1});
 $('#service-tag').textContent=s.tag;$('#service-title').textContent=s.titulo;$('#service-text').textContent=s.descripcion;$('#service-image').src=s.imagen;$('#service-image').alt=s.titulo;$('#service-demo').href=s.demoUrl||wa('Hola Blink, quiero ver una demo de '+s.tag.toLowerCase()+'.');
 const tabs=$('#plan-tabs');tabs.replaceChildren();tabs.hidden=s.planes.length===1;
 s.planes.forEach((p,i)=>{const b=document.createElement('button');b.type='button';b.className='plan-tab';b.textContent=p.nombre;b.onclick=()=>renderPlan(i);tabs.append(b)});
 renderPlan(key==='social'?1:0);
}
const serviceButtons=[...document.querySelectorAll('[data-s]')];serviceButtons.forEach((b,i)=>{b.onclick=()=>renderService(b.dataset.s);b.onkeydown=e=>{if(!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?serviceButtons.length-1:(i+(['ArrowDown','ArrowRight'].includes(e.key)?1:-1)+serviceButtons.length)%serviceButtons.length;serviceButtons[n].focus();renderService(serviceButtons[n].dataset.s)}});
renderService('social');
const track=$('#client-track');for(let copy=0;copy<2;copy++){const group=document.createElement('div');group.className='client-group';if(copy)group.setAttribute('aria-hidden','true');config.clientes.forEach(c=>{const a=document.createElement('a');a.href=c.url;a.target='_blank';a.rel='noopener';a.className='client-logo';a.style.background=c.fondo||'#fff';a.setAttribute('aria-label',c.nombre+' en Instagram');if(copy)a.tabIndex=-1;const img=document.createElement('img');img.src=c.imagen;img.alt=c.nombre;img.loading='lazy';if(c.escala)img.style.setProperty('--logo-scale',c.escala);a.append(img);const click=document.createElement('span');click.className='logo-click';click.textContent='Ver marca ↗';a.append(click);group.append(a)});track.append(group)}
$('#whatsapp-contact').onclick=()=>window.open(wa('Hola Blink, quiero impulsar mi marca.'),'_blank','noopener');
$('#demo-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const text=`Hola Blink, soy ${f.get('nombre')} de ${f.get('negocio')}.\nMe interesa: ${f.get('servicio')}.\nMi idea: ${f.get('idea')}`;window.open(wa(text),'_blank','noopener');$('#result').textContent='Tu solicitud está lista. Revísala y envíala desde WhatsApp.'};
let phrase=0;const heading=$('#hero-headline');const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function changeHeadline(){if(document.hidden||reduced.matches)return;heading.classList.add('headline-out');setTimeout(()=>{phrase=(phrase+1)%config.frases.length;heading.replaceChildren(document.createTextNode(config.frases[phrase][0]),document.createElement('br'));const em=document.createElement('em');em.textContent=config.frases[phrase][1];heading.append(em);heading.classList.remove('headline-out');heading.classList.add('headline-enter');setTimeout(()=>heading.classList.remove('headline-enter'),700)},450)}
setInterval(changeHeadline,5000);
// Animación progresiva: el contenido permanece visible si faltan APIs o hay movimiento reducido.
if(!reduced.matches){
 if('IntersectionObserver' in window){
  document.documentElement.classList.add('motion-ready');
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');revealObserver.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.section-heading,.services,.clients h2,.client-marquee,.monthly-copy,.monthly-extra,.demo-copy,#demo-form,footer').forEach(el=>{el.classList.add('reveal');revealObserver.observe(el)});
  const pauseObserver=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('motion-paused',!e.isIntersecting)),{rootMargin:'80px'});
  document.querySelectorAll('.ticker,.client-marquee').forEach(el=>pauseObserver.observe(el));
 }
 const animateOnce=el=>{el.classList.remove('is-switching');requestAnimationFrame(()=>el.classList.add('is-switching'))};
 const contentObserver=new MutationObserver(()=>{animateOnce($('.service-content'));animateOnce($('#service-image'))});contentObserver.observe($('#service-title'),{childList:true});
 const planObserver=new MutationObserver(()=>animateOnce($('#plan-detail')));planObserver.observe($('#plan-detail'),{childList:true});
 document.addEventListener('visibilitychange',()=>document.documentElement.classList.toggle('page-hidden',document.hidden));
}
