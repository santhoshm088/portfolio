var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByclass('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


function checkSkillsAnimation() {
  const skillsSection = document.getElementById('skills');
  const skillsTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Check if the skills section is visible in the viewport
  if (skillsTop < windowHeight) {
    const skillElements = document.querySelectorAll('.sk1 div div');

    // Remove the active class to trigger reanimation
    skillElements.forEach((element) => {
      element.classList.remove('animate-in');
    });

    // Wait a moment for the class removal to take effect, then add it back to trigger animation
    setTimeout(() => {
      skillElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-in');
        }, index * 100); // Adjust the delay between animations as needed
      });
    }, 100);
  }
}

// Call the function once the page is loaded
window.addEventListener('load', checkSkillsAnimation);
window.addEventListener('scroll', checkSkillsAnimation); 

function SendMail()
{
  
  var params ={
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value

  }
  console.log("hghg")
  emailjs.send("service_xo3afsh","template_v2bg6ec",params).then(function(res){
    window.alert("jsfdfh");
    alert("Success!");
  })

  .catch(err => window.alert(err)); 
}