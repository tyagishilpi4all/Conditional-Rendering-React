import React, {Component} from 'react';

class SubChild extends Component{
    
    render(){
        return(
            <React.Fragment>
                <h3>
                    Subchild Component\//
                </h3>
                <button>Log Out</button>
            </React.Fragment>
        )
    }
}
export default SubChild;