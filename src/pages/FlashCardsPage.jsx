import React from 'react'
import { FlashCard } from "../components";
import { useQuery } from "react-query";
import { getFlashcards } from "../api/flashcards";
import { Box } from '@mui/material';

const FlasCardsPage = () => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['flashcards'],
    queryFn: getFlashcards
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <Box sx={{ flex: 1, flexGrow: 1}}>
        {data.map((item) => (
        <FlashCard key={item.id} {...item}/>
      ))}    
    </Box>
  )
}

export default FlasCardsPage