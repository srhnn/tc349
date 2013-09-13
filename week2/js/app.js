var browser;
var user = navigator.appName;

if (user.indexOf("Chrome")) {
	browser = "Google Chrome";
}
else if (user.indexOf("Safari")) {
	browser = "Safari";
}
else if (user.indexOf("Mozilla Firefox")) {
	browser = "Firefox";
}
else if (user.indexOf("MSIE")) {
	browser = "Internet Explorer";
}
else if (user.indexOf("Opera")) {
	browser = "Opera";
}

function hello() {
	alert ("You are using " + browser + "!");
};