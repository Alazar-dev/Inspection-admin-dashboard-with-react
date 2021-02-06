import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useState, useEffect } from 'react';


const useStyles = makeStyles({
  root: {
    minWidth: 300,
    // marginLeft: 40,
    backgroundColor: 'yellow',
    margin: '0px 50px',
  },
  title: {
    fontSize: 14,
  },
  text: {
    fontSize: 30
  },
  num: {
    fontSize: 50,
    marginTop: 15
  },

  pos: {
    marginBottom: 12,
  },
});

const CardUser =() => {
  const classes = useStyles();

const [ error, setError ] = useState(null) ;
const [ isLoaded, setIsLoaded ] = useState(false);
const [ users, setUsers ] = useState([]);
useEffect(() => {
  fetch('http://192.168.1.118:8080/api/user')
  .then(res => res.json)
  .then(
    (result) => {
      setIsLoaded(true)
      setUsers(true)
    },
    (error) => {
      setIsLoaded(true)
      setError(error)
    }
  )
},[])

if (!isLoaded) {
  return <div>Loading</div>
} else if (error) {
  <div>{error.message}</div>
} else {
  console.log(users.length + 'us')
  console.log(users.length)
  // return <div></div>
}


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          Users
        </Typography>
        <Typography className={classes.num} color="textPrimary">
          {setUsers.length}
        </Typography>
        <Typography className={classes.text} variant="body2" component="p">
          Users
        </Typography>
      </CardContent>

    </Card>
  );
}

export default CardUser;