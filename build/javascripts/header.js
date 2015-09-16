React.render(
    React.createElement("div", {className: "ui menu"}, 
        React.createElement("a", {className: "item"}, "Browse"), 
        React.createElement("a", {className: "item"}, "Submit"), 
        React.createElement("div", {className: "right menu"}, 
            React.createElement("a", {className: "item"}, "Sign Up"), 
            React.createElement("a", {className: "item"}, "Help")
        )
    ),
    document.getElementById('main_header')
);



