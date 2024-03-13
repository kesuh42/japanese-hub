import React from "react";
import { TextField, Container } from '@mui/material';

function Search () {
    function handleSubmit(e) {
        e.preventDefault();
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
            .then(response => console.log(response))
        });
    }

    return (
        <Container
            style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" name="searchterm" label="Enter search term" variant="outlined" onSubmit={handleSubmit}
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }} />
            </form>
        </Container>
    );
};

export default Search;