import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const DriverTable = () => {

    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ drivers, setDrivers ] = useState([])

    useEffect(() => {
        fetch('https://mighty-earth-67652.herokuapp.com/api/driver')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setDrivers(result)
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
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="left">Birth Date</TableCell>
                <TableCell align="left">Plate Number</TableCell>
                <TableCell align="left">License Number</TableCell>
                <TableCell align="left">Photo</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {drivers.map((driver) => (
                <TableRow key={driver.id}>
                    <TableCell align="left">{driver.first_name}</TableCell>
                    <TableCell align="left">{driver.last_name}</TableCell>
                    <TableCell align="left">{driver.phone_number}</TableCell>
                    <TableCell align="left">{driver.age}</TableCell>
                    <TableCell align="left">{driver.gender}</TableCell>
                    <TableCell align="left">{driver.birth_date}</TableCell>
                    <TableCell align="left">{driver.plate_number}</TableCell>
                    <TableCell align="left">{driver.license_number}</TableCell>
                    <TableCell align="left">{driver.photo}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        )
    }
}
export default DriverTable;