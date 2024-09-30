const page = window.location.pathname;
const navbarlink = document.querySelectorAll('nav a').forEach(link =>{
  if(link.href.includes(`${page}`)){
    link.classList.add('active');
  }
});

let idx = 1;
slideShow(idx);

function plusSlides(n) { 
    slideShow(idx += n); 
}

function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { 
        idx = 1
    }    
    if (n < 1) {
        idx = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[idx-1].style.display = "block"; 
}