var treeSpace = "";
var treeArray = {};
  		
document.getElementById("myButton").addEventListener("click", growTree);

window.addEventListener("keyup", function(e){
	if (e.keyCode == 13) {
    document.getElementById("myButton").click();
	}
});

function growTree(treeArray) {
	treeArray.character = document.getElementById("character").value;
	treeArray.height = document.getElementById("height").value;

  if (treeArray.height == "") {
    alert("Please enter height");
  } else if (treeArray.character == "") {
    alert("Please enter character");
  } else {
    for (var i = 0; i < treeArray.height; i++) {
      var char = 2 * i + 1;
      var space = treeArray.height - (i + 1);

      for (var j = 0; j < space; j++) {
        treeSpace += " ";
      }

      for (var k = 0; k < char; k++) {
        treeSpace += treeArray.character;
      }
    
      console.log(treeSpace);
      treeSpace = "";
    }
  }
}