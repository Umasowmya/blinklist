import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typo from '../../atoms/Typo/index'
import { customStyles } from '../../../theme/index';
import { Grid } from '@mui/material';
import timer from '../../../assets/timer.jpg'
import person from '../../../assets/person.jpg'
import dots from '../../../assets/Dots.png'


interface Props{
   image:string
  title:string,
  author:string,
  time:string,
  read:string

}


export default function card({title,author,time,read,image,}:Props) {

    const classes = customStyles();

  return (
    <Card className={classes.cardHead}>
      <CardMedia
        component="img"
        height="292"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typo variant='subtitle1' className={classes.bookTitle} text={title} component='div'></Typo>
        <Typo variant='body1' className={classes.bookAuthor} text={author} component='div'></Typo>
        <Grid container direction='row' spacing={4}>
            <Grid item direction='row' sx={{display:'flex'}}>
                <Grid item direction='row' >
                    <img src={timer} alt='timer' width='16.67px' height='16.67px'/>
                </Grid>
                <Grid item direction='row'>
                    <Typo className={classes.readCount} component='div' text={time}></Typo>
                </Grid>
            </Grid>
            <Grid item direction='row' sx={{display:'flex'}}>
                <Grid item direction='row' >
                    <img src={person} alt='timer' width='16.67px' height='16.67px'/>
                </Grid>
                <Grid item direction='row'>
                    <Typo className={classes.readCount} component='div' text={read}></Typo>
                </Grid>
            </Grid>
        </Grid>
      </CardContent>

      <CardActions>
          
         
      </CardActions>
    </Card>
  );
}
