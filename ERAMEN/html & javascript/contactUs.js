const page = window.location.pathname;
      const navbarlink = document.querySelectorAll('nav a').forEach(link =>{
        if(link.href.includes(`${page}`)){
          link.classList.add('active');
        }
      });

      function validateForm() {
        let name = document.forms["contactForm"]["fname"].value;
        let email = document.forms["contactForm"]["email"].value;
        let phone = document.forms["contactForm"]["phone"].value;
        let preferences = document.forms["contactForm"]["preferences"].value;
        let cb = document.forms["contactForm"]["accept"];

        if (name.length < 3) {
          alert("Name must be more than 3 characters");
          return false;
        }

        if(email.length<5) {
          alert("Email address invalid");
          return false;
        }

        if(isNaN(phone)){
          alert("Input numeric value only");
          return false;
        }

        if(phone.length < 6) {
          alert("Phone must be more than 6 number");
          return false;
        }

        if(preferences == ""){
          alert("Please select an option of preferences");
          return false;
        }

        if(!cb.checked){
          alert("Please Check The Checkbox");
          return false;
        }

        alert("Successfully Submit!")

      }