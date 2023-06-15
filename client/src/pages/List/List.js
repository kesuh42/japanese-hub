import React from "react";
import WordCard from "../../components/WordCard/WordCard";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

function List() {
    const dummyData = [{
        "word": "戦",
        "reading": "いくさ",
        "definition": [
            [
                "war",
                "battle",
                "campaign",
                "fight"
            ],
            [
                "troops",
                "forces"
            ]
        ]
    }]
    return (
        <Box m={4} sx={{ flexGrow: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                    <WordCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <WordCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <WordCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <WordCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default List;