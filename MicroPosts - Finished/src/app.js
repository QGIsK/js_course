import { http } from "./http";
import { ui } from "./ui";

//get posts on dom load
document.addEventListener("DOMContentLoaded", getPosts);

//Listen for add posts
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for delete
document.querySelector("#posts").addEventListener("click", deletePost);

//listen for edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

//listen for cancel
document.querySelector(".card-form").addEventListener("click", cancelEdit);

//get posts
function getPosts() {
	http
		.get("http://localhost:3000/posts")
		.then(data => {
			ui.showPosts(data);
		})
		.catch(e => console.log(e));
}

//Submit post
function submitPost() {
	const title = document.querySelector("#title").value;
	const body = document.querySelector("#body").value;
	const id = document.querySelector("#id").value;

	const data = {
		title,
		body
	};

	if (title === "" || body === "") {
		ui.showAlert("Please fill in all fields", "rounded alert alert-danger");
	} else {
		if (id === "") {
			//create post
			http
				.post("http://localhost:3000/posts", data)
				.then(data => {
					ui.showAlert("Post added", "rounded alert alert-success");
					ui.clearFields();
					getPosts();
				})
				.catch(e => console.log(e));
		} else {
			//update post
			http
				.put(`http://localhost:3000/posts/${id}`, data)
				.then(data => {
					ui.showAlert("Post updated", "rounded alert alert-success");
					ui.changeFormState("add");
					getPosts();
				})
				.catch(e => console.log(e));
		}
	}
}

function deletePost(e) {
	if (e.target.parentElement.classList.contains("delete")) {
		const id = e.target.parentElement.dataset.id;
		if (confirm("Are you sure?")) {
			http
				.delete(`http://localhost:3000/posts/${id}`)
				.then(data => {
					ui.showAlert("Post removed", "rounded alert alert-success");
					getPosts();
				})
				.catch(err => console.log(err));
		}
	}
	e.preventDefault();
}

//enable edit state
function enableEdit(e) {
	if (e.target.parentElement.classList.contains("edit")) {
		const id = e.target.parentElement.dataset.id;
		const title =
			e.target.parentElement.previousElementSibling.previousElementSibling
				.textContent;
		const body = e.target.parentElement.previousElementSibling.textContent;

		const data = {
			id,
			title,
			body
		};

		//Fill form with current post
		ui.fillForm(data);
	}

	e.preventDefault();
}

//cancel edit state
function cancelEdit(e) {
	if (e.target.classList.contains("post-cancel")) {
		ui.changeFormState("add");
	}

	e.preventDefault();
}
