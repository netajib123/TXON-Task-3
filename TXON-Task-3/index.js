window.onload = () => {
	const form1 = document.querySelector("#addForm");
	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Create") {

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Create";
		document.getElementById("item").value = " ";
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");

	let deleteButton = document.createElement("button");

	deleteButton.className = "delete";

	deleteButton.appendChild(document.createTextNode("DELETE"));

	let editButton = document.createElement("button");

	editButton.className = " edit";

	editButton.appendChild(document.createTextNode("UPDATE"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		let li = e.target.parentNode;
		items.removeChild(li);
	}

	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "Save";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}