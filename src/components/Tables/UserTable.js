import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';


const UserTable = () => {

    const [ error, setError ] = useState(null)
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.118:8080/api/user')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setUsers(result)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    },[])
        if (error) {
            return <div>{error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                // <TableCell key={user.id}>
                                //     {user.name}
                                // </TableCell>
                                <TableCell key={user.name}>
                                    {user.email}, {user.name}
                                </TableCell>
                                
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

}

export default UserTable;