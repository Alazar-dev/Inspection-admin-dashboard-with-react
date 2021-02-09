import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    backgroundColor: 'red',
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
    marginTop: 15,
  },
  text: {
    fontSize: 30
  }
});

const CardVehicle = () => {
  const classes = useStyles();

  const [ error, setError ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ vehicles, setVehicles ] = useState([])

  useEffect(() => {
    fetch('https://mighty-earth-67652.herokuapp.com/api/vehicle')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true)
        setVehicles(result)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  } else if (error){
    <div>{error.message}</div>
  } else {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography>
            Vehicles
          </Typography>
          <Typography className={classes.num} variant="body2" component="p">
            {vehicles.length}
          </Typography>
          <Typography className={classes.text}>
            Vehicles
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default CardVehicle;