import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.text}>
          Drivers
        </Typography>
        <Typography className={classes.num} color="textPrimary">
          50
        </Typography>
        <Typography variant="body2" component="p">
          Drivers
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardDriver;