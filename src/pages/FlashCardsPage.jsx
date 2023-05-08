import React from 'react'
import { FlashCard } from "../components";
import { useQuery } from "react-query";
import { getFlashcards } from "../api/flashcards";
import { Box, List, ListItem, Stack } from '@mui/material';

const FlasCardsPage = () => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['flashcards'],
    queryFn: getFlashcards,
    cacheTime: 24 * 60 * 60,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <Box sx={{ height: '100%'}}>
      <Stack  spacing={{ sx: 1, sm: 2}} direction="row" useFlexGap flexWrap="wrap">
        {data.map((item) => (
          <Box key={item.id} sx={{ flexGrow: 1, width: '40%'}}>
            <FlashCard {...item} />
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default FlasCardsPage