// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. 

// ### It accepts a single object as an argument. The object should have two key/value pairs.

// 1. A key that specifies the height of the pine tree.
// 1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
// 1. A key that specifies which character to use to build the pine tree.
// 1. The character to use should be from user input in a `<input type="text">` field in the DOM.

// Once the user enters in a number, and a character, the user can either then just press the 
// enter key _(as long as the cursor is in one of the input fields)_, 
// or click a button that is labeled "Grow your tree" and the tree should be shown in the console. 
// This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
 	
 // Get user data
 	var treeChar = document.getElementById("character").value;
	var treeHeight = document.getElementById("height").value;

	var button = document.getElementById("myButton");
	var treeSpace = "";
	var tree = "";
  		

	button.addEventListener("click", userInput);
	document.getElementById("myButton").addEventListener("click", growTree);

	function userInput() {
  		if (treeArray.height === "") {
    alert("Please enter height");
  		} else if (treeArray.character === "") {
    alert("Please enter character");
  	} 
}

	function clickEvent(keypress){
		if (keypress.keyCode === 13) {
			growTree();
	}
}

	var treeArray = {
  		height: treeHeight.value,
  		character: treeChar.value
};

// Grow tree function

 	function growTree(treeArray) {
 		treeArray.character = document.getElementById("character").value;
		treeArray.height = document.getElementById("height").value;

//do math on user input

  	 for (var i = 0; i < treeArray.height; i++) {
    	var char = 2 * i + 1;
   		var space = treeArray.height - (i + 1);
  	
//add spaces to space variable

  	for (var j = 0; j < space; j++) {
  		treeSpace += " ";
  	}
  	  	for (var k = 0; k < char; k++) {
  			treeSpace += treeArray.character;
  		}
  	console.log(treeSpace);
  //clear treeSpace after each loop
  treeSpace = "";
  }
}
 	











