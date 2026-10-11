const prog=document.querySelector('.prog');
addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  prog.style.width=(max>0?scrollY/max*100:0)+'%';
},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
