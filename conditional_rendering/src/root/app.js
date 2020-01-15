import React ,{Component} from 'react';
 import Child from '../components/child';
 import SubChild from '../components/subchild';
import SubChild1 from '../components/SubChild1';

class App extends Component{
     state={
        isSelected:true
    }
    myapp=()=>{  
        this.setState({
            isSelected: !this.state.isSelected
        })
    }
    demo(){
        const {isSelected}=this.state; 
        if(isSelected){
            return(
                <React.Fragment>
                    <button onClick={this.myapp}>clickMe</button>
                    <Child></Child>
                </React.Fragment>
            )
        }  
        else{
            return(
                <React.Fragment>
                    <button onClick={this.myapp}>clickMe</button>
                    <SubChild></SubChild>
                </React.Fragment>
            )
        }  
    }
    render(){
        const {isSelected}=this.state;
       return(
           <React.Fragment>
               {this.demo()}
               {isSelected && <SubChild1 />}
               {/* {
                   isSelected ? <SubChild1/> :<SubChild/>
               } */}
               <button onClick={this.myapp}>click me</button>
           </React.Fragment>
       )
            
    }
}
export default App;