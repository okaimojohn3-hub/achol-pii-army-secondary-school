const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelector('#year').textContent=new Date().getFullYear();
const lb=document.querySelector('.lightbox'), lbImg=lb.querySelector('img');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{lbImg.src=img.src;lbImg.alt=img.alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false')});
});
function closeBox(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbImg.src=''}
document.querySelector('.close').addEventListener('click',closeBox);
lb.addEventListener('click',e=>{if(e.target===lb)closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
