/* using pure JavaScript */

/*
const root = document.getElementById('root');
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World';
root.appendChild(heading)
*/


/* using react */

// creating react elements
const heading1 = React.createElement('h1', {
    id: 'title', class: 'heading1', style: { color: "blue" }
},
    'Content of h1'
)

const heading2 = React.createElement('h2', {
    id: 'title', class: 'heading2', style: { color: "green" }
},
    'Content of h2'
)

const container = React.createElement('div', {
    id: "container",
    style: { border: "1px solid black" }
},
    [heading1, heading2]
)

// creating root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);