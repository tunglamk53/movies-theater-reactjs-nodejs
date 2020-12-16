import React, { useState } from "react";
import {Button} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

const AlertElement = (props) => {

    const [show, setShow] = useState(true);

    return (
    <>
        <Alert show={show} variant="warning">
            <Alert.Heading>Movie is successfully saved in the database!</Alert.Heading>
            <p>Title: {props.newMovie.Title}</p>
            <p>Year: {props.newMovie.Year}</p>
            <p>Picture URL: {props.newMovie.Poster}</p>
            <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Close message!
                </Button>
            </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
    );
}

export default AlertElement