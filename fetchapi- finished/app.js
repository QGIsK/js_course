const http = new EasyHTTP();

// //Get users
// http.get("http://jsonplaceholder.typicode.com/users");

//data
const data = {
	name: "John doe",
	username: "Johndoe",
	email: "Johndoe@gmail.com"
};
// //post request
// http
// 	.post("http://jsonplaceholder.typicode.com/users", data)
// 	.then(data => console.log(data))
// 	.catch(e => console.log(e));

//put request
// http
// 	.put("http://jsonplaceholder.typicode.com/users/2", data)
// 	.then(data => console.log(data))
// 	.catch(e => console.log(e));

//delete request
http
	.delete("http://jsonplaceholder.typicode.com/users/2")
	.then(data => console.log(data))
	.catch(e => console.log(e));
