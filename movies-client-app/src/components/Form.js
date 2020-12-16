import {Form, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState } from 'react'
import axios from "axios";

const FormMovie = (props) => {
    
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [picUrl, setPicUrl] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios({
                method: "POST",
                url: `http://localhost:4000/`,
                data: {
                    Title: title,
                    Year: year,
                    Poster: picUrl
                }
            })
            // set new movie which is successfully saved
            props.setNewMovie(result.data.newMovie)
            props.setClickedAddMovie(false)

        } catch (err) {
            console.log(err)
        } 
    }
    // console.log(title);
    // console.log(year);
    // console.log(picUrl);


    return (
        <>
        <Form className="ml-5">
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Title
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Movie</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            id="inlineFormInputGroup" 
                            placeholder="Title" 
                            value={title}
                            onChange = {e => setTitle(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Year
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Year</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            id="inlineFormInputGroup" 
                            placeholder="Year" 
                            value={year}
                            onChange = {e => setYear(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Picture
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Picture URL</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            id="inlineFormInputGroup" 
                            placeholder="URL (if have)"
                            value={picUrl}
                            onChange = {e => setPicUrl(e.target.value)} 
                        />
                    </InputGroup>
                </Col>

                {/* Add movie button */}
                <Col xs="auto">
                    <Button type="submit" className="mb-2" onClick={onSubmit}>
                        Add Movie
                    </Button>
                </Col>

                {/* Cancel button */}
                <Col xs="auto">
                    <Button 
                        type="button" 
                        className="mb-2" 
                        variant="outline-danger"
                        onClick={() => props.setClickedAddMovie(false)}
                    >
                        Cancel
                    </Button>
                </Col>
            </Form.Row>
        </Form>
        </>
    )
}

export default FormMovie