function addRow(){
var scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
scoresRef.orderByValue().on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    console.log("The " + data.key() + " dinosaur's score is " + data.val());
    addRow1(data.key(),data.val());
  
  });
});

}

function addRow1(tagName,TagDes)
{
	if (!document.getElementsByTagName) return;
	tabBody=document.getElementsByTagName("tbody").item(0);
	row=document.createElement("tr");
	cell1 = document.createElement("td");
	cell2 = document.createElement("td");

	textnode1=document.createTextNode(tagName);
	textnode2=document.createTextNode(TagDes);
	
	cell1.appendChild(textnode1);
	cell2.appendChild(textnode2);
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	
	tabBody.appendChild(row);
}