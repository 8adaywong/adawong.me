$(document).ready(function() {
  AOS.init();
  console.log("hi");
  var options = {
    strings: ["<span style='color: #5FB7DD'> code</span>.", "<span style='color: #FFC280'> develop</span>.", "<span style='color: #4AD4B3'> grow</span>.", "<span style='color: #D0B3FF'> design</span>.", "<span style='color:	#FFB6C1'> laugh</span>."],
    typeSpeed: 50,
    backSpeed: 40,
    showCursor: false,
    loop: true
  };
  var typed = new Typed("#typedStrings", options);
});
