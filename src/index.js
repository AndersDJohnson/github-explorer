

var github = new Github({
  // username: "YOU_USER",
  // password: "YOUR_PASSWORD",
  // auth: "basic"
});

var user = github.getUser();

user.userRepos('AndersDJohnson', function(err, repos) {
	console.log(arguments);
});
