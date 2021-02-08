import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function BasicTable() {
  const classes = useStyles();

  const [ error, setError ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ users, setUsers ] = useState([])

  useEffect(() => {
      fetch('http://192.168.1.103:8080/api/user')
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
  }, [])

  if (error) {
      return <div>{error.message}</div>
  } else if (!isLoaded) {
      return <div>Loading...</div>
  } else {
      return (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">{user.email}</TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
  }
  
}
