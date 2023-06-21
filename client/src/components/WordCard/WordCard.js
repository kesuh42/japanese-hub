import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WordCard () {

    return (
        <Card sx={{ width: 1 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            Word
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Part of Speech (i.e. noun)
          </Typography>
          <Typography variant="body2">
            Definitions
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    );
}

export default WordCard;