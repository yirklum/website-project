$(document).ready(function(){
	
	console.log("get document ready");

	/* Contact Forms */

	$("form").submit(function(event){

        var firstName = $("#firstName").val();

        if (firstName === ""){
            alert("First Name required");
            event.preventDefault();
        }

    });
	
	$('form').submit(function(event){

        var lastName = $("#lastName").val();

        if (lastName === ""){
            alert("Last Name required");
            event.preventDefault();
        }

    });
	   
	$("form").submit(function(event){

        var email = $("#email").val();

        if (email === ""){
            alert("E-mail Address required");
            event.preventDefault();
        }

    });

	/*Memorabilia*/

    // Get the modal
	var modal = document.getElementById('shatteredGlassModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var aimg = document.getElementById('shatteredGlass');
	var modalImg = document.getElementById("shatteredGlassImage");
	var captionText = document.getElementById("shatteredGlassCaption");
	aimg.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	    captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
	
});

