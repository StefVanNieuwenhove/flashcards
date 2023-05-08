import { Box, AppBar, Tab, Toolbar } from "@mui/material";
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { useState } from "react";
import { FlashCards, AddFlasCard } from "./pages";

function App() {
  const [tab, setTab] = useState('0');

  

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={tab}>
      <Box sx={{ borderColor: 'divider' }}>
        <Toolbar>
        <AppBar >
          <TabList
            onChange={handleChange}
            variant="fullWidth"
            centered
            textColor="inherit"
            indicatorColor="inherit"
          >
            <Tab label="Overview flashcards" value={'0'} />
            <Tab label="Create new flashcard" value={'1'} />
          </TabList>
        </AppBar>
        </Toolbar>
      </Box>
      <TabPanel value={'0'}>
        <FlashCards />
      </TabPanel>
      <TabPanel value={'1'}>
        <AddFlasCard />
      </TabPanel>
    </TabContext>
  </Box>
     
  );
}

export default App;
