import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    backgroundColor: 'green',
    margin: '0px 50px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  num: {
    fontSize: 50,
    marginTop: 15
  },
  text: {
    fontSize: 30
  }
});

const CardDriver = () => {
  const classes = useStyles();

  const [ error, setError ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ drivers, setDrivers ] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.112:8080/api/driver')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true)
        setDrivers(result);
      },
      (error) => {
        setIsLoaded(true)
        setError(null)
      }
    )
  }, [])

  if (error) {
    return <div>{error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.text}>
          Drivers
        </Typography>
        <Typography className={classes.num} color="textPrimary">
          {drivers.length}
        </Typography>
        <Typography variant="body2" component="p">
          Drivers
        </Typography>
      </CardContent>
    </Card>
    )
  }

}

export default CardDriver;