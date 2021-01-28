import React, { Component } from 'react';
import Navigation from './Navigation'


class User extends Component {
    state = {
        loading: true,
        person: null
    }

    async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false})
    }

    render () {
        return (
            <div>
                {this.state.loading ? (<div>Loading...</div>): 
                    <div>
                        <Navigation />
                        <div className="container">
                            <div className="row">
                                <div classNames="col col-sm12">
                                    <h1 className="text-center">Vehicle Inspection</h1>
                                    <div>{this.state.person.name.first}</div>
                                    <div>{this.state.person.name.last}</div>
                                    <img src={this.state.person.picture.large} alt={this.state.person.name.first + "'s name"} />                
                                </div>
                            </div>
                        </div>
                    </div>
                    }
            </div>
        )
    }
}

export default User;