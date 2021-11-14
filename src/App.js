const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed)
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: "Tommy", animal:"Dog", breed: "Bichon Maltes"}),
            React.createElement(Pet, {name: "Pepper", animal:"Bird", breed: "Cockatiel"}),
        ]
     );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"))