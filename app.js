let searchUser = document.getElementById("search-user");
const github = new Github;
const ui = new UI;

searchUser.addEventListener("keyup", () => {
    if (searchUser.value !== '') {
        github.getUser(searchUser.value)
            .then(data => {
                if (data.message ==="Not Found") {
                    ui.showAlert()
                } else {
                    ui.showProfile(data);
                }
            })
    } else {
        ui.clearProfile();
    }
})