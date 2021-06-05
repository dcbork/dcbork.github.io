var iDo = ["make", "research", "build", "design", "test", "print", "study", "explore", "do"];
var iContact= ["Reach", "Talk to", "Work with", "Ask"]
var palette = ["#3993DD", "#E63946", "#688E26","#FAA613"];
var tempColor;
iD = 0;
iC = 0;
var date = new Date();

function dynamicSkills() {
   var title = iDo[iD];
   tempColor = $("#dynamicSkills").css("color");
   console.log(tempColor);
   var newPalette = palette;
   const index = newPalette.indexOf(tempColor);
   if (index > -1) {
      newPalette.splice(index, 1);
   }
   console.log(newPalette);
   var randomColor = newPalette[Math.floor(Math.random() * newPalette.length)];
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

$(".MxR").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".MxR").css("height", "30vw");
});

$(".ARoS").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".ARoS").css("height", "30vw");
});

$(".STEAM").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".STEAM").css("height", "30vw");
});

$(".XR").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".XR").css("height", "30vw");
});

$(".Printing").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Printing").css("height", "30vw");
});

$(".CompVis").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".CompVis").css("height", "30vw");
});

$(".Education").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Education").css("height", "30vw");
});

$(".Maker").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Maker").css("height", "30vw");
});

$(".OpenSource").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".OpenSource").css("height", "30vw");
});

$(".Robotics").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Robotics").css("height", "30vw");
});

$(".Light").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Light").css("height", "30vw");
});

$(".Climbing").mouseenter(function(){
   $(".image").css("height", "0px");
   $(".Climbing").css("height", "30vw");
});

dynamicSkills();
dynamicCopywrite();
randomHighlight();
setInterval(dynamicSkills, 1319);
setInterval(dynamicContact, 1913);
