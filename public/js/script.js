function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
    
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
    }
    
  }
function myFunction2(){
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
  }
  function projFunction(){
    var project = document.getElementById("project");
    var projbtn = document.getElementById("projbtn");
    if (project.classList.contains('hidden')) {
      project.classList.add("notHidden");
      project.classList.remove("hidden");
      projbtn.innerHTML = "Load less";
    } else {
      project.classList.add("hidden");
      project.classList.remove("notHidden");
      projbtn.innerHTML = "Load more";
    }

  }
  function serviFunction(){
    var servi = document.getElementById("servi");
    var projbtn = document.getElementById("projbtn");
    if (servi.classList.contains('hidden')) {
      servi.classList.add("notHidden");
      servi.classList.remove("hidden");
      servibtn.innerHTML = "Load less";
    } else {
      servi.classList.add("hidden");
      servi.classList.remove("notHidden");
      servibtn.innerHTML = "Load more";
    }

  }