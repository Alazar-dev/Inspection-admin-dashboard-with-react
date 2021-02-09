import { useState, useEffect } from 'react';

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
            <div>I am different</div>
        )
    }
}
export default DriverTable;