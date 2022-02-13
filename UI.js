class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary m-1">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary m-1">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success m-1">Public Followers: ${user.followers}</span>
        <span class="badge badge-info m-1">Public Following: ${user.following}</span>
      <br><br>
      <ul class="list-group">
      <li class="list-group-item">Company : ${user.company}</li>
      <li class="list-group-item">Website/Blog : ${user.blog}</li>
      <li class="list-group-item">Location : ${user.location}</li>
      <li class="list-group-item">Member Since : ${user.created_at}</li>
      </ul>
        </div>
        </div>
        </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

    showAlert() {
        let tmp = "";
        tmp = `<div class="d-flex align-items-center alert alert-danger t"><p class="lead">User Not Found</p></div>`
        document.getElementById("not-found").innerHTML = tmp;
        setTimeout(() => {
            document.getElementById("not-found").innerHTML = "";
        }, 3000)

        // this.clearAlert();
        // console.log(message)
        // const div = document.createElement("div");
        // div.className = `${className}`;
        // div.appendChild(document.createTextNode(message));
        // const container = document.querySelector(".search-container");
        // search = document.querySelector(".search");
        // container.insertBefore(div, search);

        // setTimeout(() => {
        //     this.clearAlert();
        // }, 2000);
    }
}