function login(user, callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        callback();
    }, 1000);
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback();
    }, 1000);
}

login("Ansa", () => {
    getProfile(() => {
        getPosts(() => {
            console.log("All done");
        });
    });
});