import React, { Component } from 'react';

class Form extends Component {

    state = {
        firstName: '',
        lastName: ''
    }
    render() {
        return (
            <div>
                <form>
                    <input type="checkbox" value={this.state.firstName}/>
                </form>
            </div>
        )
    }
}

export default Form;