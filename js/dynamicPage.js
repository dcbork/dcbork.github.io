var iDo = ["make", "research", "build", "design", "test", "print", "study", "explore"];
var iContact= ["Reach", "Talk to", "Work with", "Ask"]
iD = 0;
iC = 0;
var date = new Date();

function dynamicSkills() {
   var title = iDo[iD];
   $("#dynamicSkills").text(title);
   iD = (iD+1) % iDo.length;
}
dynamicSkills();

function dynamicContact() {
   var contact = iContact[iC];
   $("#dynamicContact").text(contact);
   iC = (iC+1) % iContact.length;
}
dynamicContact();

function dynamicCopywrite() {
   var currentYear = date.getFullYear();
   $("#dynamicCopywrite").text(currentYear);
}

setInterval(dynamicSkills, 1013);
setInterval(dynamicContact, 1913);
window.onload = function() {
  dynamicCopywrite();
};
