
function myFunction() {
    var x = document.getElementById("nav_links");
    if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }

  
    var i = 0;
    var txt = 'A fresh start will put you on your way.'; 
    var speed = 50; 
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }