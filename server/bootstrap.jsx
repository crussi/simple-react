Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "ryan@ryan.com",
            password: "foodbars"
        });
    }
});