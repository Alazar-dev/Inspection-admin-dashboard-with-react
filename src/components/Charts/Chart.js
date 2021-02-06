import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react'

const Chart = () => {
    const [ ChartData, setChartData ] = useState([]);

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45 ,34 ,32, 23],
                    backgroundColor: [ 
                      'rgba(75, 192, 192, 0.6'
                ],
                borderWidth: 4
                }

            ]
        })
    }

    useEffect(() => {
        chart()
    },[])
    return ( 
        <div className="cart">
            <div>
                <Line data={ChartData}/>
            </div>
        </div>
     );
}
 

export default Chart;