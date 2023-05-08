import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Typography, Box, Container } from '@mui/material';

const FlashCard = ({ title, description }) => {
  const [hidden, setHidden] = useState(false);
  return (
  
    <Card variant='outlined' sx={{ borderColor: 'lightgray', }}>
      <CardHeader title={title} sx={{textDecoration: 'underline'}} />
      <Box sx={{
        display: 'flex',
        height: '150px',
        overflow: 'auto',
        width: '100%'
      }}>
      {hidden && (
        <CardContent >
          <Typography  gutterBottom variant="h6" component="div">
            {description}
          </Typography>
        </CardContent>
      )}   
      </Box>
        
      <CardActions>
        {hidden ? (<Button size='small' variant='contained' color='warning' onClick={() => setHidden(false)}>Hide description</Button>) : (<Button size='small' variant='contained' color='success' onClick={() => setHidden(true)}>Show description</Button>)}
      </CardActions>
    </Card>

  )
}

export default FlashCard