//init classes
const github = new GitHub();
const ui = new UI();

//Search input
const searchUser = document.getElementById("searchUser");

//Search Event
searchUser.addEventListener("keyup", e => {
	//e.preventDefault();

	//Get input text
	const userText = e.target.value;

	if (userText !== "") {
		github.getUser(userText).then(data => {
			if (data.profile.message === "Not Found") {
				//show error alert
				ui.showAlert("User not found", "danger");
			} else {
				//show profile data
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		//clear profileResponse
		ui.clearProfile();
	}
});
