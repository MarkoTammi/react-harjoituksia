import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import { spacing } from '@material-ui/system'
import Checkbox from '@material-ui/core/Checkbox'



const useStyles = makeStyles(theme => ({
  card:{
    maxWidth: 200,
  },
  media:{
    height: 300,
  }
}))

const theme = {
  spacing: value => value ** 2,
}


const App = () => {
  const classes = useStyles()
  const post = [
    {
      title: 'Markku',
      src: 'https://www.w3schools.com/w3css/img_avatar3.png',
      description: 'Markku on ...'
    },
    {
      title: 'Alpit',
      src: 'https://www.w3schools.com/w3css/img_snowtops.jpg',
      description: 'Alpit on vuoristo Euroopassa'
    },
    {
      title: 'Lontoo',
      src: 'https://www.w3schools.com/w3css/img_london.jpg',
      description: 'Lontoo on UKn pääkaupunki.'
    },
    {
      title: 'Revontulet',
      src: 'https://www.w3schools.com/w3css/img_lights.jpg',
      description: 'Revontulet loistavat taivaalla.'
    },
    {
      title: 'Tie vuoristossa',
      src: 'https://www.w3schools.com/w3css/img_mountains.jpg',
      description: 'Tie vuoristossa vie äärettömyyteen.'
    }
  ]
  //console.log(post[0].title)


  return(
    <div>

      <AppBar position='relative'>
        <Typography variant='h5' align='center'>Material UI harjoitus</Typography>
      </AppBar>
    

      <Card>
        <Typography variant='h6' component="h3">
          {post[0].title}
        </Typography>
        <CardMedia
          className={classes.media} 
          image={post[0].src}
          />
        <Typography component="p">
          {post[0].description}
        </Typography>
      </Card>

      <Typography margin={4}> Tähän pieni tauko</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {post.map(value => (
              <Grid key={value} item>
                <Card>
                  <Typography variant='h6' component="h3">
                    {value.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="150"
                    className={classes.media} 
                    image={value.src}
                  />
                  <Typography component="p">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Button color='primary' variant='contained' size='large'>Send</Button>
      <Button color='primary' variant='outlined' size='small'>cancel</Button>


      <Checkbox
        value="checkedA"
        inputProps={{ 'aria-label': 'Checkbox A' }}
      />
    </div>

  )
}

//Toolbar
//Typography

export default App;
