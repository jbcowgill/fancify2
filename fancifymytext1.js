function biggerText() {
	alert("Hello, world!");
	document.getElementById("userText").style.fontSize = "24pt";
}

function fancyText() {
	if (document.getElementById("fancyShmancy").checked) {
		alert("FancyShmancy selected");
		document.getElementById("userText").style.fontWeight = "bold";
		document.getElementById("userText").style.color = "blue";
		document.getElementById("userText").style.textDecoration = "underline";
	} else if (document.getElementById("boringBetty").checked) {
		alert("BoringBetty selected");
		document.getElementById("userText").style.fontWeight = "normal";
		document.getElementById("userText").style.color = "black";
		document.getElementById("userText").style.textDecoration = "none";
	}
}

function mooText() {
	let text = document.getElementById("userText").value;
	let sentences = text.split(".");
	sentences = sentences.map(sentence => sentence.trim() + "-Moo");
	document.getElementById("userText").value = sentences.join(". ");
}

document.getElementById("biggerBtn").addEventListener("click", biggerText);
document.getElementById("fancyShmancy").addEventListener("change", fancyText);
document.getElementById("boringBetty").addEventListener("change", fancyText);
document.getElementById("mooBtn").addEventListener("click", mooText);
