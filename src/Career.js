//use of props (properties)
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

function Career(props) {
    useEffect(() => {
        console.log("props ", props.msg)
    })
    return (
        <div>
            <h1>Component to use Prop</h1>
            <p>{props.msg}</p>
            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button>{' '}
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </>
        </div>
    );
}

export default Career;

