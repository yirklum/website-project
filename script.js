$(document).ready(function(){
	
	console.log("get document ready");

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

});