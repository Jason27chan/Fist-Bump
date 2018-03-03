$(function() {
	// $('#postButton').click(function() {
	// 	console.log("Hello world");
	// });

	$('#postButton').click(postInfo);
});

function postInfo() {
	var text = $("#postButton").text();
	var info1 = $("#input-info").val();
	console.log(info1);
	console.log(text)
	$.post("database.php", {info:info1}, function(data) {
		console.log(data + "\nfinished");
	});
}

function postGUIState() { 
    // var arr = retrieveGraphParams();
    
    // console.log("data: " + arr);

    $.post("post_gui.php",
    function(data, status) {
        alert("Data : " + data + "\nStatus: " + status);
    });
}