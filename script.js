function createAccount() {
  

    contenubutton.addEventListener("click", () => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let rpassword = document.getElementById('rpassword').value;
    let contenubutton = document.getElementById("contenubutton");
  
        
      if (username.length <= 5) {
        alert("The username should be greater than five characters");
        return;
      }
  
      if (email.length === 0 || !validateEmail(email)) {
        alert("Invalid email address");
        return;
      }
      if (password.value !== rpassword.value) {
        alert("The password is not identical");
        return;
      } else if (password.length < 8) {
        alert("The password is less than eight characters");
        return;
      }
      fetch("https://6552c0675449cfda0f2dca61.mockapi.io/books", {
                  method: "POST",
                  body: JSON.stringify({
                  username: username,
                  email: email,
                  rpassword: rpassword,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                  .then((response) => response.json())
                  .then((json) => (window.location.href = "index.html"));
    });
  }
  createAccount(); 
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  