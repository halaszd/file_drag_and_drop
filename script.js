// Global


// Functions
function getFile(event) {
	let labelElement = document.querySelector("label");
	let path = event.target.value.split("\\");
	labelElement.innerHTML = path[path.length -1]
}

// Main function
function _load() {
	const rootElement = document.getElementById("root");

	rootElement.insertAdjacentHTML("beforeend", 
	`
		<div id="upload">
			<label for="file-input">Click Here or Drop Your File</label>
			<input id="input-field" type="file">
		</div>
	`);

	const inputField = document.getElementById("input-field");
	inputField.addEventListener("input", getFile);
};


window.addEventListener("load", _load);