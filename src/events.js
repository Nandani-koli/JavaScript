import React, { useState } from "react";

function EventTut() {
    const test2 = (e) => {
        console.log(e.target.value);
    }

    const test = () => {
        console.log("test function");
    }
    const [val, setVal] = useState("enter name");

    const getval = (e) => {
        setVal(e.target.value);
    }

    return (
        <div>
            <h1>Event in React</h1>
            {/* This will not wait for click event (no wait for button to click)--> */}
            <button onClick={console.log("hello on click")}>Click me</button>
            <button onClick={test()}>Click me3</button>
            <br /> <br />

            {/* This will run on onclick event  */}
            <button onClick={() => { console.log("hello on click2") }}>click me 2</button>
            <button onClick={test}>Click me4</button>
            <br /> <br />


            {/* get the value of input on onchange event  */}
            <input type="text" onChange={test2} /> <br /><br />

            {/* get the value of input on button click  */}
            <input type="text" value={val} onChange={getval} />
            <button onClick={() => { alert(val) }}>save</button>


        </div>
    )
}

export default EventTut;