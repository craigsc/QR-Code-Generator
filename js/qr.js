$(document).ready(function() {
	var size = 125;
	$("#slider").slider({
		min: 50,
		max: 500,
		step: 25,
		value: 125,
		slide: function(event, ui) {
			if (ui.value) {
				size = ui.value;
				$("#qrcode").width(size);
				$("#qrcode").height(size);
				$("#slider-label").html("QR-Code Size: <span style='color:red;'>" + size + "x" + size + "</span>");
				if ($("input#packageName").val()) {
					loadPackageQR($("input#packageName").val());
				} else {
					loadNameQR($("input#appName").val());
				}
			}
		}
	});
	
	function loadPackageQR(packageName) {
		loadQR("market://details?id=" + packageName);
	}
	
	function loadNameQR(appName) {
		loadQR("market://search?q=" + appName);
	}
	
	function loadQR(content) {
		$("#qrcode").html("<img src='http://chart.apis.google.com/chart?cht=qr&chs=" + size + "x" + size + "&chl=" + content + "&chld=H|0'/>");
	}
	
	$("input#packageName").keyup(function() {
		if ($(this).val()) {
			$("#app").hide('slow');
			$("#or").hide('slow');
			loadPackageQR($(this).val());
			$("#qrarea").slideDown();
		} else {
			$("#app").show('fast');
			$("#or").show('fast');
			$("#qrarea").slideUp();
		}
	});
	
	$("input#appName").keyup(function() {
		if ($(this).val()) {
			$("#package").hide('slow');
			$("#or").hide('slow');
			loadNameQR($(this).val());
			$("#qrarea").slideDown();
		} else {
			$("#package").show('fast');
			$("#or").show('fast');
			$("#qrarea").slideUp();
		}
	});
});