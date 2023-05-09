function dropdown() {
    var x = document.getElementById("NavbarPages");
    if (x.className === "navbarPages") {
      x.className += " responsive";
    } else {
      x.className = "navbarPages";
    }

  }

var navbarShift = undefined;

if (window.outerWidth(true) >= 775) {
  navbarShift = "-50px";
} else {
  navbarShift = "-80px";
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset; //somehow this redundancy is necessary
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("NavContainer").style.top = "0";
  } else {
    document.getElementById("NavContainer").style.top = navbarShift;
  }
  prevScrollpos = currentScrollPos;
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();