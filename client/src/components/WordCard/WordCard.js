import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WordCard (props) {
    const handleDelete = async () => {
      fetch(`http://localhost:5000/${props.id}`, {
        method: "DELETE"
      }).then(res => res.json({message: "Deleted Place"}))

      props.onDelete();
    }

    return (
        <Card sx={{ width: 1 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            {props.word ? `${props.word} , ${props.reading}` : props.reading}
          </Typography>
          {props.part_of_speech.map((item) => <Typography sx={{ mb: 1.5 }} color="text.secondary">{item}</Typography>)}
          {props.definition.map((entry) => 
          <Typography variant="body2"> {props.definition.indexOf(entry) + 1}. {entry.map((subdefinition) => {
            return entry.indexOf(subdefinition) + 1 < entry.length ?
            `${subdefinition}, ` : `${subdefinition}`
          }
          )}</Typography>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDelete}>Delete Card</Button>
        </CardActions>
      </Card>
    );
}

export default WordCard;