$(document).ready(function() {
	var timestamp = new Date();
	$("#chattext").append($('<p message_id="0"><span>' + timestamp + '</span></p>'));
    $("#button").on("click", function() {
		var time = $("#chattext > p:first").find('span').text();
		if ($("#text").val() != '') {
			$.get("message.html", {
				name: $("#name").val(),
				message: $("#text").val(),
				date: new Date()
			});
		}
		$("#text").val('').focus();
            
    });
	var refresh = function () {
		$.get("refresh.html", { message_id: $("#chattext > p:first").attr("message_id") }, function (data, textStatus) {
			for (var i=0; i < data.length; i++) {
				var $txt = $('<p message_id="' + data[i]['id'] + '">' + data[i]["name"] + ": " + data[i]["message"] + "	" + '<span>' + data[i]["date"] + '</span></p>');
				$("#chattext > p:first").before($txt);
			}
			setTimeout(refresh, 2000);
		});
		
	}
	refresh();
	
});