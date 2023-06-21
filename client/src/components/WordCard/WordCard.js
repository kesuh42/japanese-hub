import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WordCard (props) {

    return (
        <Card sx={{ width: 1 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            {props.word}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.part_of_speech}
          </Typography>
          <Typography variant="body2">
            {props.definition}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    );
}

export default WordCard;