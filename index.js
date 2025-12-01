const toggles=document.querySelectorAll('.toggle');
const navEl=document.querySelector('nav ul');
toggles.forEach(toggle=>{

  toggle.addEventListener("click",()=>{
      navEl.classList.toggle('replace')
  })
})
