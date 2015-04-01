// document.ready=function() {
// 	alert("You got it! The answer is ");
// 			}

function popup() {
alert("Hello World")
}

function display() {
document.getElementsByClassName('inner')[1].innerHTML = Date();
}

$(document).ready(function(){
	$(".inner").onLoad(function(){
		$(".inner").fadeIn(5000);
	});

  $(".btn").click(function(){
    $(".cover").slideToggle(5000);
    $(".cover").fadeIn(2000);
  });
});