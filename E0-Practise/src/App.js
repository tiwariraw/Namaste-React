// import React from 'react';

// export default function App() {

//     return (
//         <div>
//             <h1>Practise</h1>
//         </div>
//     );
// }


import React, { useState } from 'react';

function ParentComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <ChildComponent />
        </div>
    );
}

function ChildComponent() {
    console.log('ChildComponent rendered');
    return <p>Child Component</p>;
}

export default ParentComponent;