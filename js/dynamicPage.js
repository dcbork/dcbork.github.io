var iDo = ["make", "research", "build", "design", "test", "print", "study", "explore", "do"];
var iContact= ["Reach", "Talk to", "Work with", "Ask"]
var palette = ['#3993DD', '#E63946', '#688E26','#FAA613'];
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
   $("#dynamicContact").css('color', randomColor);
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
      $("#pop"+i.toString()).css('color', randomColor);
   }
}

$("a").hover(function(){
   var randomColor = palette[Math.floor(Math.random() * palette.length)];
   tempColor = $(this).css("color");
   $(this).css("color", randomColor);
   }, function(){
   $(this).css("color", tempColor);
   tempColor = "#F5F5F5";
});

dynamicSkills();
dynamicCopywrite();
randomHighlight();
setInterval(dynamicSkills, 1319);
setInterval(dynamicContact, 1913);
