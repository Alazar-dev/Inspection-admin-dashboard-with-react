import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardUser from '../Cards/CardUser';
import CardDriver from "../Cards/CardDriver";
import CardVehicle from '../Cards/CardVehicle';

import Chart from '../Charts/Chart'

const useStyles = makeStyles(() => ({
    grid: {
        width: '100%',
        margin: '0px'
    }
}))
const DashboardPage = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid justify="center" spacing={2} container>
                <Grid item xs={3}>
                    <CardUser />       
                </Grid>
                <Grid item xs={3}>
                    <CardDriver />       
                </Grid>
                <Grid item xs={3}>
                    <CardVehicle />       
                </Grid>
                <Grid item justify="center"xs={12}>
                    <Chart />    
                </Grid>
            </Grid>
        </div>

    );
}


export default DashboardPage;