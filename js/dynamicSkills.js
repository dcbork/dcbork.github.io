var iDo = ["make", "research", "build", "design", "test", "print", "explore"];
i = 0;
function dynamicSkills() {
   var title = iDo[i];
   $("#dynamicSkills").text(title);
   i = (i+1) % iDo.length;
}
dynamicSkills(0);


setInterval(dynamicSkills, 1000);
