class Github {
    constructor() {
        this.client_id = "3e10c7f6bcce290158ec";
        this.client_secret = "1c493ad0057bb7bc10556dba9de7625b62d85afa";
    }
    async getUser (user){
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let profile = await profileResponse.json();
        return profile;
    }

}

