function loginUser(username, callback) {
    console.log("Logging in " + username);

    setTimeout(() => {
        console.log("Login success");
        callback();
    }, 2000);
}

function loadDashboard() {
    console.log("Dashboard loaded");
}

loginUser("Ansalna", loadDashboard);