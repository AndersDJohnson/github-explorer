

var withRepos = function (repos) {

  repos = _.sortBy(repos, function (i) {
    return i.name.toLowerCase();
  });

  console.log(repos);

  var reposCmp = [];

  if (repos) {
    repos.forEach(function (repo) {
      reposCmp.push(
        <div>
          <a href={repo.html_url}>{repo.name}</a>
        </div>
      );
    })
  }

  React.render(
    <div>{reposCmp}</div>
    ,
    document.getElementById('wrap')
  );

};


var repos = localStorage.getItem('repos');

if (repos) {
  repos = JSON.parse(repos);
  withRepos(repos);
}
else {

  var github = new Github({
    // username: "YOU_USER",
    // password: "YOUR_PASSWORD",
    // auth: "basic"
  });

  var user = github.getUser();

  user.userRepos('AndersDJohnson', function(err, repos) {
    if (err) throw err;
    localStorage.setItem('repos', JSON.stringify(repos));
    withRepos(repos);
  });
}

