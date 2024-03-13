import React, { useState, useEffect } from "react";
import { TextField, Container, Alert, Button } from '@mui/material';

function Search() {
    const [FormFeedback, setFormFeedback] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setFormFeedback(true)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/JishoSearch?searchterm=` + `${e.target.elements.searchterm.value}`)
            .then(response => response.json())
            .then(data => {
                fetch(`${process.env.REACT_APP_BACKEND_URL}/card`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify(data)
                    })
                    .then(response => console.log(response));
            });
    }

    function AlertBox() {
        return (
        <Alert severity="success"
            style={{
                position: "absolute",
                bottom: "0%",
                left: "0%",
            }}
            onClose={() => { setFormFeedback(false) }}>
            Card Created
        </Alert>
        );
    }

    return (
        <Container
        >
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" name="searchterm" label="Enter search term" variant="outlined" onSubmit={handleSubmit}
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }} />
            </form>
            {FormFeedback ? <AlertBox/> : null}
        </Container>
    );
};

export default Search;