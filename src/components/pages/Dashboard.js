import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardUser from '../Cards/CardUser';
import CardDriver from "../Cards/CardDriver";
import CardVehicle from '../Cards/CardVehicle';

import UserTable from '../Tables/UserTable';
import Chart from '../Charts/Chart'

// import { Card } from 'material-ui/core/Card'


const useStyles = makeStyles(() => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    tobe: {
        height: 20
    }

}))
const DashboardPage = () => {

    const classes = useStyles();

    const [error, setError ] = useState(null)
    const [isLoaded, setIsLoaded ] = useState(false)
    const [ users, setUser] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.103:8080/api/user')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setUser(result)
                
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {/* <ul>
                    {users.map(user => (
                        <li key={user.id}>
                        {user.name.length} {user.price}
                        </li>
                    ))}
                </ul> */}
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
                    <Grid item className={classes.tobe} justify="center"xs={12}>
                        <Chart />    
                    </Grid>
                
                </Grid>
            </div>

        );
    }
}


export default DashboardPage;