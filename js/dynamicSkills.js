var iDo = ["research", "build", "design", "test", "print", "explore"];
function dynamicSkills(i) {
if (iDo.length > i) {
   setTimeout(function() {
      document.getElementById("dynamicSkills").innerHTML = example[i];
      textSequence(++i);
   }, 1000); // 1 second (in milliseconds)
} else if (iDo.length == i) { // Loop
   textSequence(0);
}
}
dynamicSkills(0);
