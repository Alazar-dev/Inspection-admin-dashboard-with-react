import  React, { Component } from 'react';
import Footer from '../Footer'
class DashboardPage extends Component {
    constructor(props){
        super(props);
        this.state = []
    }

    render() {
        return (
            <div>
                <h2>Hellot Traba</h2>
                <Footer />
            </div>
        )
    }
}

export default DashboardPage;