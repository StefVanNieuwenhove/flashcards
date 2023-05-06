import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Typography, Box } from '@mui/material';

const FlashCard = ({ title, description }) => {
  const [hidden, setHidden] = useState(false);
  return (
    <Card variant='outlined' sx={{ m: 3, borderColor: 'lightgray'}}>
      <CardHeader title={title} />
      <Box sx={{
        height: '150px'
      }}>
      {hidden && (
        <CardContent>
          <Typography  gutterBottom variant="h6" component="div">
            {description}
          </Typography>
        </CardContent>
      )}   
      </Box>
        
      <CardActions>
        {hidden ? (<Button size='small' onClick={() => setHidden(false)}>Hide description</Button>) : (<Button size='small' onClick={() => setHidden(true)}>Show description</Button>)}
      </CardActions>
    </Card>
  )
}

export default FlashCard