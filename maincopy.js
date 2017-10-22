//$(document).onload(function(){
//$(document).ready(function(){
window.onload = function(){

	console.log("ready");
};





     
        var item = localStorage.getItem("added");
        if(item!=null){
		document.getElementById("status").innerHTML="You have the following items in the list";
		var list=document.createElement("ul"); 
		document.body.appendChild(list);
        var liItem=document.createElement("li");
        list.appendChild(liItem);
		/*var text=localStorage.getItem("added");*/
		liItem.appendChild(document.createTextNode("trial"));
		}

		else{
			document.getElementById("status").innerHTML="You have no items";
		}



 

		$("#individual").click(disabledDropdown());
		$("#pack1").click(enableDropdown());
		$("#pack2").click(enableDropdown());

		function disabledDropdown(){
	    document.getElementById("mySelect").disabled= true;
	    document.getElementById("checkboxes").style.display="none";
	    }

	    function enableDropdown(){
	    document.getElementById("mySelect").disabled=false;
	    document.getElementById("checkboxes").style.display="none";

	    }
});


		
       
         


	})




		
   









/* Checkbox functionality*/

var expanded = false;


function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded &&  document.getElementById("mySelect").disabled == false) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
 localStorage.setItem("flavours", document.getElementsByClassName("checkbox").checked());

}


$(".checkbox").on('click', function() {
    var fav, favs = [];
    $('.checkbox').each(function() { // run through each of the checkboxes
        fav = {value: $(this).prop('checked')};
        favs.push(fav);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
});




















function disable() {
    document.getElementById("mySelect").disabled=true;*/

