React.render(
    React.createElement("div", {className: "ui menu"}, 
        React.createElement("span", null, 
            React.createElement("h1", {className: "ui header"}, "Kick Me!", 
                React.createElement("small", {className: "ui sub header"}, "New Project Notifications for Kickstater")
            )
        ), 
        React.createElement("div", {className: "right menu"}, 
            React.createElement("a", {className: "item"}, "Sign In"), 
            React.createElement("a", {className: "item"}, "Sign Up")
        )
    ),
    document.getElementById('main_header')
);



