React.render(
    React.createElement("div", {className: " ui raised very padded text container segment"}, 
        React.createElement("div", {className: "ui two column middle aligned very relaxed stackable grid"}, 
            React.createElement("div", {className: "column"}, 
                React.createElement("div", {className: "ui form"}, 
                    React.createElement("div", {className: "field"}, 
                        React.createElement("label", null, "Username"), 
                        React.createElement("div", {className: "ui left icon input"}, 
                            React.createElement("input", {type: "text", placeholder: "Username", autoComplete: "off"}), 
                            React.createElement("i", {className: "user icon"})
                        )
                    ), 

                    React.createElement("div", {className: "field"}, 
                        React.createElement("label", null, "Password"), 
                        React.createElement("div", {className: "ui left icon input"}, 
                            React.createElement("input", {type: "password", placeholder: "Password", autoComplete: "off"}), 
                            React.createElement("i", {className: "lock icon"})
                        )
                    ), 
                    React.createElement("div", {className: "ui blue submit button"}, "Login")
                )
            ), 

            React.createElement("div", {className: "ui vertical divider"}, 
                "Or"
            ), 

            React.createElement("div", {className: "center aligned column"}, 
                React.createElement("div", {className: "ui big green labeled icon button"}, 
                    React.createElement("i", {className: "signup icon"}), 
                    "Sign Up"
                )
            )
        )
    ),
    document.getElementById('auth_form')
);



