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
			var notFound = window.open("","_blank", "toolbar=yes, scrollbars=yes,status=yes, resizable=yes, top=100, left=400, width=600, height=400");
			
			notFound.document.write("<h2>No result found for : </h2>")
			notFound.document.write("<hr />");
			notFound.document.write("<h2>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;"+snapshot.key()+"&gt " );
		}
		else  {
		    var found = window.open("","_blank", "toolbar=yes, scrollbars=yes,status=yes, resizable=yes, top=100, left=400, width=600, height=400");
			found.document.write("<h2>Check the following result:</h2>");
			found.document.write("<hr />");
			found.document.write("<h2>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;"+snapshot.key()+"&gt ");
		}
		
			
	});    
}