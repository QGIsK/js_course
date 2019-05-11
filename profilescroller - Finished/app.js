const data = [
	{
		name: "John Doe",
		age: "22",
		gender: "male",
		lookingFor: "female",
		location: "Unknown",
		image: "https://randomuser.me/api/portraits/men/33.jpg"
	},
	{
		name: "Jade Doe",
		age: "32",
		gender: "female",
		lookingFor: "male",
		location: "Unknown",
		image: "https://randomuser.me/api/portraits/women/33.jpg"
	},
	{
		name: "Alex Doe",
		age: "42",
		gender: "male",
		lookingFor: "female",
		location: "Unknown",
		image: "https://randomuser.me/api/portraits/men/34.jpg"
	}
];

const profiles = profileIterator(data);

//load on ready
nextProfile();

//next event
document.getElementById("next").addEventListener("click", nextProfile);

//next profile imageDisplay
function nextProfile() {
	const currentProfile = profiles.next().value;

	if (currentProfile !== undefined) {
		document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${
			currentProfile.gender
		} looking for ${currentProfile.lookingFor}</li>
    </ul>
    `;

		document.getElementById("imageDisplay").innerHTML = `<img src="${
			currentProfile.image
		}">`;
	} else {
		window.location.reload();
	}
}

//profile iterator
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < profiles.length
				? { value: profiles[nextIndex++], done: false }
				: { done: true };
		}
	};
}
