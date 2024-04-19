  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let eyeIcon = document.getElementById("eye");
  let submitBtn = document.getElementById("submit_btn");
  let userEmail = "example1212@gmail.com";
  let userPassword = "saylanismit1212";

  eyeIcon.addEventListener("click", ()=>{
    if(password.type === "password"){
      password.type = "text";
      eyeIcon.className = "fa-solid fa-eye-slash";
    }else{
      password.type = "password";
      eyeIcon.className = "fa-solid fa-eye";
    }
  });

  submitBtn.addEventListener("click", ()=>{

    let userEmail1 = email.value.toLowerCase();
    let userPassword1 = password.value;

    if((userEmail1 == userEmail && userPassword1 == userPassword) || userEmail1 === "" && userPassword1 === ""){
      alert("You are logged In");
      email.value = "";
      password.value = "";
    }else{
      alert("please enter valid email or password");
      email.value = "";
      password.value = "";
    };

  });



