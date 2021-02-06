import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          Vehicles
        </Typography>
        <Typography className={classes.num} variant="body2" component="p">
          82
        </Typography>
        <Typography className={classes.text}>
          Vehicles
        </Typography>
      </CardContent>

    </Card>
  );
}

export default CardVehicle;