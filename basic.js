const parent=React.createElement("div",{id:"Parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"child1"},"I am h1"),
React.createElement("h2",{id:"child2"},"I am h2")]
));

const h=React.createElement("h1",{id:"heading"},"I am hhh")
const root=ReactDOM.createRoot(document.getElementById("rooot"));
root.render(parent);