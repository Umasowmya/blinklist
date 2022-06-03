import { Grid } from '@mui/material';
import React from 'react'

interface Props{

    Header:React.ReactNode;
    Content:React.ReactNode;
    Footer:React.ReactNode;
}



const index = ({Header,Content,Footer}:Props) => {
  return (
   
    <Grid container direction='column' spacing={10}>
        <Grid item >
            {Header}
        </Grid>
        <Grid item >
            {Content}
        </Grid>
        <Grid item >
            {Footer}
        </Grid>

    </Grid>
  )
}

export default index
