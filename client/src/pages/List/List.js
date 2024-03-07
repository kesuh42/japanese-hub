import React, { useState, useEffect } from "react";
import WordCard from "../../components/WordCard/WordCard";
import Grid from '@mui/material/Grid';
import { Box, useThemeProps } from "@mui/material";

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
    },
    {
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

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/card')
        .then(response => response.json())
        .then(data => setCardData(data));
    });

    function cardDeleteHandler(deletedCardId) {
        setCardData(
            prevCards => prevCards.filter(card => card.id !== deletedCardId)
        )
    }

    const CardDeck = cardData.map((data) =>
        <Grid item xs={6} md={4}>
            <WordCard id = {data._id} word={data.word} part_of_speech={data.parts_of_speech} reading={data.reading} definition={data.definition} onDelete={cardDeleteHandler}/>
        </Grid>
    )
    // return (
    //     <Box m={4} sx={{ flexGrow: 2 }}>
    //         <Grid container spacing={4}>
    //             <Grid item xs={6} md={4}>
    //                 <WordCard />
    //             </Grid>
    //             <Grid item xs={6} md={4}>
    //                 <WordCard />
    //             </Grid>
    //             <Grid item xs={6} md={4}>
    //                 <WordCard />
    //             </Grid>
    //             <Grid item xs={6} md={4}>
    //                 <WordCard />
    //             </Grid>
    //         </Grid>
    //     </Box>
    // );
    return (
        <Box m={4} sx={{ flexGrow: 2 }}>
            <Grid container spacing={4}>
                {CardDeck}
            </Grid>
        </Box>
    );
};

export default List;