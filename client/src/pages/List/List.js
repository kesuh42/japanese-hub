import React from "react";
import WordCard from "../../components/WordCard/WordCard";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

function List() {
    const dummyData = [{
        "word": "戦",
        "parts_of_speech": [
            "Noun"
        ],
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
    },
    {
        "word": "年",
        "parts_of_speech": [
            "Noun",
            "Adverb (fukushi)"
        ],
        "reading": "とし",
        "definition": [
            [
                "year"
            ],
            [
                "age",
                "years"
            ],
            [
                "past one's prime",
                "old age"
            ],
            [
                "Year"
            ]
        ]
    },
    {
        "word": "犬",
        "parts_of_speech": [
            "Noun"
        ],
        "reading": "いぬ",
        "definition": [
            [
                "dog (Canis (lupus) familiaris)"
            ],
            [
                "squealer",
                "rat",
                "snitch",
                "informer",
                "informant",
                "spy"
            ],
            [
                "loser",
                "asshole"
            ],
            [
                "counterfeit",
                "inferior",
                "useless",
                "wasteful"
            ]
        ]
    }
]
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