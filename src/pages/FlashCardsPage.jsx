import React from 'react'
import { FlashCard } from "../components";
import { useQuery } from "react-query";
import { getFlashcards } from "../api/flashcards";
import { Box, Stack } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner'

const FlasCardsPage = () => {
  const {data, isLoading, isError, error
  } = useQuery({
    queryKey: ['flashcards'],
    queryFn: getFlashcards,
    cacheTime: 24 * 60 * 60,
  })

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ThreeDots 
        height="100" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        visible={true}
        />
    </Box>
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