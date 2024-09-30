const page = window.location.pathname;
    const navbarlink = document.querySelectorAll('nav a').forEach(link =>{
      if(link.href.includes(`${page}`)){
        link.classList.add('active');
      }
    });
    const productramen = document.querySelectorAll('.tab a').forEach(link =>{
      if(link.href.includes(`${page}`)){
        link.classList.add('active');
      }
    });