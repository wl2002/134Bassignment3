var dataRefd = new Firebase("https://poweredbycoffee1.firebaseio.com/description");

dataRefd.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function search_tag() {
	var s_tagName = document.getElementById("s_tagName").value;
	console.log(s_tagName);
	dataRefd.child(s_tagName).once("value", function(snapshot) {
		if (snapshot.val() === null){
			alert("not found");
		}
		if (snapshot.val() !== null) {
		    var myWindow = window.open("", "MsgWindow", "width=600, height=600");
			myWindow.document.write("<p>Check the following result:</p>" + "&lt;"+snapshot.key()+"&gt; ");
		}
		
			
	});    
}