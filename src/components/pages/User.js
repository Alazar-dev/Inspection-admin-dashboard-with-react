import React, { Component } from 'react';

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
                    (<div>{this.state.person.name.first}</div>)}
            </div>
        )
    }
}

export default User;