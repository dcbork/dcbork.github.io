var iDo = ["make", "research", "build", "design", "test", "print", "explore"];
i = 0;
var date = new Date();

function dynamicSkills() {
   var title = iDo[i];
   $("#dynamicSkills").text(title);
   i = (i+1) % iDo.length;
}
dynamicSkills();

function dynamicCopywrite() {
   var currentYear = date.getFullYear();
   $("#dynamicCopywrite").text(currentYear);
}

setInterval(dynamicSkills, 1000);
window.onload = function() {
  dynamicCopywrite();
};
