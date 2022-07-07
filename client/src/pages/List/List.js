import React from "react";
import WordCard from "../../components/WordCard/WordCard";

function List () {
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
        <div className="cardContainer">
            <WordCard />
            <WordCard />
        </div>
    );
};

export default List;