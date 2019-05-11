const pageState = function() {
	let currentState = new homeState(this);

	this.init = function() {
		this.change(new homeState());
	};

	this.change = function(state) {
		currentState = state;
	};
};

//Home State
const homeState = function(page) {
	document.querySelector("#heading").textContent = null;
	document.querySelector("#content").innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
};

//About state
const aboutState = function(state) {
	document.querySelector("#heading").textContent = "About Us";
	document.querySelector("#content").innerHTML = `
  <p>This is the about page</p>
  `;
};

//Contact state
const contactState = function(state) {
	document.querySelector("#heading").textContent = "About Us";
	document.querySelector("#content").innerHTML = `
  <form>
    <div class="container">
      <h1 id="heading"></h1>
      <div id="content"></div>
    </div>

    <div class="form-group">
      <label for="Name"></label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="email" class="">Email</label>
      <input type="email" class="form-control">
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
  `;
};

//Init State
const page = new pageState();

page.init();

//UI vars
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

//home
home.addEventListener("click", e => {
	e.preventDefault();
	page.change(new homeState());
});

about.addEventListener("click", e => {
	page.change(new aboutState());
	e.preventDefault();
});

contact.addEventListener("click", e => {
	page.change(new contactState());
	e.preventDefault();
});
