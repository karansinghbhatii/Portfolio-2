
/*let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }

    })
}



window.onscroll = () => {
    let top = window.scrollY;
  
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navlinks.forEach(link => link.classList.remove('active'));
        
        let activeLink = document.querySelector('header nav a[href*=' + id + ']');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };
  


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
*/




const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
