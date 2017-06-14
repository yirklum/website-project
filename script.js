$(document).ready(function(){
	
	console.log("get document ready");

	/* Homepage Categories */

	$("#show-thisjustin").click(function () {
		$("#thisjustin").show();
		$(this).hide();
		$("#hide-thisjustin").show();
	});
	
	$("#hide-thisjustin").click(function () {
		$("#thisjustin").hide();
		$(this).hide();
		$("#show-thisjustin").show();
	});

	$("#show-thewayitwas").click(function () {
		$("#thewayitwas").show();
		$(this).hide();
		$("#hide-thewayitwas").show();
	});
	
	$("#hide-thewayitwas").click(function () {
		$("#thewayitwas").hide();
		$(this).hide();
		$("#show-thewayitwas").show();
	});

	$("#show-moreonthestory").click(function () {
		$("#moreonthestory").show();
		$(this).hide();
		$("#hide-moreonthestory").show();
	});
	
	$("#hide-moreonthestory").click(function () {
		$("#moreonthestory").hide();
		$(this).hide();
		$("#show-moreonthestory").show();
	});

	$("#show-newsfeed").click(function () {
		$("#newsfeed").show();
		$(this).hide();
		$("#hide-newsfeed").show();
	});
	
	$("#hide-newsfeed").click(function () {
		$("#newsfeed").hide();
		$(this).hide();
		$("#show-newsfeed").show();
	});

	$("#show-talkingheads").click(function () {
		$("#talkingheads").show();
		$(this).hide();
		$("#hide-talkingheads").show();
	});
	
	$("#hide-talkingheads").click(function () {
		$("#talkingheads").hide();
		$(this).hide();
		$("#show-talkingheads").show();
	});

	$("#show-newsgatheringtools").click(function () {
		$("#newsgatheringtools").show();
		$(this).hide();
		$("#hide-newsgatheringtools").show();
	});
	
	$("#hide-newsgatheringtools").click(function () {
		$("#newsgatheringtools").hide();
		$(this).hide();
		$("#show-newsgatheringtools").show();
	});

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

    // Get the modal
	var modal = document.getElementById('shatteredGlassModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('shatteredGlass');
	var modalImg = document.getElementById("shatteredGlassImage");
	var captionText = document.getElementById("shatteredGlassCaption");
	img.onclick = function(){
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