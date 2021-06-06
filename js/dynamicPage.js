var iDo = ["make", "research", "build", "design", "test", "print", "study", "explore", "do"];
var iContact= ["Reach", "Talk to", "Work with", "Ask"]
var palette = ["#3993DD", "#E63946", "#688E26","#FAA613"];
var tempColor;
iD = 0;
iC = 0;
var date = new Date();

function dynamicSkills() {
   var title = iDo[iD];
   var randomColor = palette[Math.floor(Math.random() * palette.length)];
   $("#dynamicSkills").text(title);
   $("#dynamicSkills").css("color", randomColor);
   iD = (iD+1) % iDo.length;
}

function dynamicContact() {
   var contact = iContact[iC];
   var randomColor = palette[Math.floor(Math.random() * palette.length)];
   $("#dynamicContact").text(contact);
   $("#dynamicContact").css("color", randomColor);
   iC = (iC+1) % iContact.length;
}
dynamicContact();

function dynamicCopywrite() {
   var currentYear = date.getFullYear();
   $("#dynamicCopywrite").text(currentYear);
}

function randomHighlight() {
   var i;
   for (i = 0; i <= 9; i++) {
      var randomColor = palette[Math.floor(Math.random() * palette.length)];
      $("#pop"+i.toString()).css("color", randomColor);
   }
}

$(".imageAction").mouseenter(function(){
   var randomColor = palette[Math.floor(Math.random() * palette.length)];
   var css = ".imageAction:hover { color:" + randomColor + " }";
   var style = document.createElement("style");

   if (style.styleSheet) {
       style.styleSheet.cssText = css;
   } else {
       style.appendChild(document.createTextNode(css));
   }

   document.getElementsByTagName("head")[0].appendChild(style);
});

$(".MxRHead").hover(function(){
      $(".image").css("height", "0px");
      $(".MxR").css("height", "30vw");
});

$(".ARoSHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".ARoS").css("height", "30vw");
});

$(".STEAMHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".STEAM").css("height", "30vw");
});

$(".XRHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".XR").css("height", "30vw");
});

$(".PrintingHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Printing").css("height", "30vw");
});

$(".CompVisHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".CompVis").css("height", "30vw");
});

$(".EducationHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Education").css("height", "30vw");
});

$(".MakerHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Maker").css("height", "30vw");
});

$(".OpenSourceHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".OpenSource").css("height", "30vw");
});

$(".RoboticsHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Robotics").css("height", "30vw");
});

$(".LightHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Light").css("height", "30vw");
});

$(".ClimbingHead").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Climbing").css("height", "30vw");
});

dynamicSkills();
dynamicCopywrite();
randomHighlight();
setInterval(dynamicSkills, 1319);
setInterval(dynamicContact, 1913);
