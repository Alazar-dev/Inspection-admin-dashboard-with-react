import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const VehicleTable = () => {

    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ vehicles, setVehicles ] =useState([]);

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
    } else if (error) {
        return <div>{error.message}</div>
    } else {
        return (
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Reg Number</TableCell>
                <TableCell align="left">Maker</TableCell>
                <TableCell align="left">Model</TableCell>
                <TableCell align="left">Year</TableCell>
                <TableCell align="left">Color</TableCell>
                <TableCell align="left">Owner name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                    <TableCell align="left">{vehicle.registration_number}</TableCell>
                    <TableCell align="left">{vehicle.maker}</TableCell>
                    <TableCell align="left">{vehicle.model}</TableCell>
                    <TableCell align="left">{vehicle.year}</TableCell>
                    <TableCell align="left">{vehicle.color}</TableCell>
                    <TableCell align="left">{vehicle.owner_name}</TableCell>

                </TableRow>
                ))}
            </TableBody>
            </Table>
        )
    }

}

export default VehicleTable;