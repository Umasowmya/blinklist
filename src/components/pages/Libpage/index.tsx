import React from 'react'
import Template from '../../Templates/index'
import Header from '../../organisms/Header/index'
import Footer from '../../organisms/Footer/index'
import Typo from '../../atoms/Typo/index'
import { customStyles } from '../../../theme'
import { Box,Grid,Tab } from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import { useState } from 'react'
import FinishedGrid from '../../organisms/Grid/FinishedGrid'
import LibraryGrid from '../../organisms/Grid/LibraryGrid'

interface Props{
    id:number;
    image:string;
    title:string;
    author:string;
    time:string;
    read:string;
    isExplore:string
  }
  

const index : React.FC<any >= () => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const  [lib, setLib] = useState<Props[]>([
    
        {
            id:1,
            title:"Beyond Enterprenureship",
            author:"Ericson",
            read:"1.9k reads",
            time:"13-minute read",
            image:"../assets/1.png",
            isExplore:"2"
    
        }
    
        
       
    
    ]);
    
    const handlelib = (lib:Props[]) =>{

        setLib(lib);
    }


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

                        <FinishedGrid page="2" lib={lib} handlelib={handlelib}/>
                    </TabPanel>

                    <TabPanel value="2">

                        <FinishedGrid page="3" lib={lib} handlelib={handlelib}/>
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
