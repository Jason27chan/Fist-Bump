$(function() {
	$('#postButton').click(postInfo);
});

function postInfo() {
	var text = $("#postButton").text();
	var info1 = $("#input-info").val();
	console.log(info1);
	console.log(text)
	$.get("test.php", function() {
		console.log("finished");
	});
}