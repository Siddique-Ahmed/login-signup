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

    if( userEmail1 == userEmail && userPassword1 == userPassword){
      alert("You are logged In");
      email.value = "";
      password.value = "";
      localStorage.setItem("userEmail1", userEmail1);
      localStorage.setItem("userPassword1", userPassword1);
    }else if(userEmail1 == "" && userPassword1 == ""){
      alert("please fill the input");
    }else{
      alert("Please enter the correct password");
      email.value = "";
      password.value = "";
    };

  });



