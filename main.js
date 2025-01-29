function whoami() {
    var identified = false;
    if (identified != true) {
		const UUID = crypto.randomUUID();
        return UUID;
    } else {
		alert("Must generate User ID before chatting");
        return console.error("User Unidentified");
    };
};
const UUID = whoami();
let user = userGen(UUID);
function userGen(UUID) {
	const hash = sha256(UUID);
	const number = parseInt(hash.slice(0, 8), 16) % 100000;
	return number;
}

function colorGen(UUID) {
	const hash = sha256(UUID);
	const color = `#${hash.slice(0, 6)}`;
	return color;
}
let userName = userGen(UUID)
let color = colorGen(UUID);
console.log(UUID);

 function send() {
    const textbox = document.getElementById('textbox');
    const input = document.getElementById('input');
	if (!textbox || !input) {
		console.error("Textbox or Input unaviable");
		return;
	};
    const message = input.value.trim();

    if (message) {
		const messageElement = document.createElement('div');
		messageElement.style.color = color;
		messageElement.textContent = `${user}: ${message}`;
		textbox.appendChild(messageElement);
        textbox.scrollTop = textbox.scrollHeight
        input.value = '';
    };
};