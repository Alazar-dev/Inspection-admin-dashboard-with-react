import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react'

const Chart = () => {
    const [ ChartData, setChartData ] = useState([]);

    const chart = () => {
        setChartData({
            labels: ['users', 'drivers', 'vehicles', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45 ,34 ,32, 23],
                    backgroundColor: [ 
                      'rgba(75, 192, 192, 0.6'
                ],
                borderWidth: 5
                }

            ]
        })
    }

    useEffect(() => {
        chart()
    },[])
    return ( 
        <div>
            <Bar height='50pxpx' width='50px' data={ChartData}/>
        </div>
    );
}
 

export default Chart;