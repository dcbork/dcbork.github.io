var iDo = ["make", "research", "build", "design", "test", "print", "study", "explore", "do"];
var iContact= ["Reach", "Talk to", "Work with", "Ask"]
var palette = ['#3993DD', '#E63946', '#688E26','#FAA613'];
iD = 0;
iC = 0;
var date = new Date();

function dynamicSkills() {
   var title = iDo[iD];
   var randomColor = palette[Math.floor(Math.random() * palette.length)];
   $("#dynamicSkills").text(title);
   $("#dynamicSkills").css('color', randomColor);
   iD = (iD+1) % iDo.length;
}
dynamicSkills();

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

setInterval(dynamicSkills, 1319);
setInterval(dynamicContact, 1913);
window.onload = function() {
  dynamicCopywrite();
  randomHighlight();
};
