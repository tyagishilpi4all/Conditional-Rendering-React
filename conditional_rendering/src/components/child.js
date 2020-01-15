import React ,{Component} from 'react';

class Child extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>This is Child component</h1>
                <button>Login</button>
                <button>Sign Up</button>
            </React.Fragment>
        )
    }
}
export default Child;