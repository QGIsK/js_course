const User = function(name) {
	this.name = name;
	this.chatroom = null;
};

User.prototype = {
	send: function(message, to) {
		this.chatroom.send(message, this, to);
	},

	recieve: function(message, from) {
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
};

const Chatroom = function() {
	let users = {};

	return {
		register: function(user) {
			users[user.name] = user;
			user.chatroom = this;
		},

		send: function(message, from, to) {
			if (to) {
				//single user message
				to.recieve(message, from);
			} else {
				//broadcast message
				for (key in users) {
					if (users[key] !== from) {
						users[key].recieve(message, from);
					}
				}
			}
		}
	};
};

const Demian = new User("Demian");
const Brad = new User("Brad");
const Sara = new User("Sara");

const chat_room = new Chatroom();

chat_room.register(Demian);
chat_room.register(Brad);
chat_room.register(Sara);

Brad.send("Hello, Demian!", Demian);
