import { Grid } from '@mui/material'
import React from 'react'
import {myLibrary}  from '../../../Data/cardData'
import Card from '../../molecules/card/card'


const LibraryGrid = () => {
  return (
    <Grid container direction='column'>
       {myLibrary.map((lib)=>{
           return <Card props = {...lib}/>
       })}

    </Grid>
  )
}

export default LibraryGrid
