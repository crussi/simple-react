FlowRouter.route("/", {
    name: "Home",
    action(params) {
        //ReactLayout.render(Home);
        renderMainLayoutWith(<Home />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    action(param) {
        renderMainLayoutWith(<UserLogin />);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}