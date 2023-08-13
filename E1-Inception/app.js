/* DOM manipulation using pure JavaScript */

/*
const root = document.getElementById('root');
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World';
root.appendChild(heading)
*/


/* DOM manipulation using react */

// creating react elements
const heading1 = React.createElement('h1', {
    id: 'title', className: 'heading1', style: { color: "blue" }
},
    'Content of h1'
)

const heading2 = React.createElement('h2', {
    id: 'title', className: 'heading2', style: { color: "green" }
},
    'Content of h2'
)

const container = React.createElement('div', {
    id: "container",
    style: { border: "1px solid black" }
},
    [heading1, heading2]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);


/* Q: Create following HTML structure
    <div id="parent">
        <div id="child">
            <h1 id="heading1">I am heading1</h1>
            <h2 id="heading2">I am heading2</h2>
        </div>
    </div>
*/

// const heading1 = React.createElement('h1', {
//     id: 'heading1',
//     style: { "color": "green" }
// }, 'I am heading1');

// const heading2 = React.createElement('h2', {
//     id: 'heading1',
//     style: { "color": "red" }
// }, 'I am heading2');

// const child = React.createElement('div', {
//     id: "child"
// }, [heading1, heading2]);

// const parent = React.createElement('div', {
//     id: "parent"
// }, [child]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);





