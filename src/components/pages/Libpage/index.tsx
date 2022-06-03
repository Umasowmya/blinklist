import React from 'react'
import Template from '../../Templates/index'
import Header from '../../organisms/Header/index'
import Footer from '../../organisms/Footer/index'
import Typo from '../../atoms/Typo/index'
import { customStyles } from '../../../theme'
import { Box,Tab } from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import { useState } from 'react'
import LibraryGrid from '../../organisms/Grid/LibraryGrid';

const index = () => {

    const classes = customStyles();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value,setValue]=useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
    
  return (
   <Template Header={<Header/>}
    Content={
        <>
        <Typo
              variant="heading"
              component="div"
              className={classes.libtitle}
              text='My Library'
        />

            <Box sx={{ width: '100%', typography: 'body1', position:'absolute',left:'264px',top:'250px'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Currently reading" 
                                    value="1" sx={{
                                        width: "304px",
                                        textTransform: "none",
                                        alignItems: "flex-start",
                                    }}/>
                            <Tab label="Finished" value="2" sx={{
                                        width: "304px",
                                        textTransform: "none",
                                        alignItems: "flex-start",
                                    }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <LibraryGrid/>
                    </TabPanel>
                    <TabPanel value="2">
                        
                    </TabPanel>
                </TabContext>
            </Box>
    
        </>
    }
    Footer={<Footer/>}
    />
  );
}

export default index
