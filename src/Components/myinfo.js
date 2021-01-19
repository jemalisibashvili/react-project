import React, { Fragment } from 'react';
import '../App.css';



const arr1 = [];
const arr2 = [];

const Headers = (props) => {
    return (
        <h3>ნივთი - {props.headers}</h3>
    );
}
const Text = (props) => {
    return (
        <p>{props.text} ნივთის აღწერა</p>
    )
}
const Poster = () =>{
    
    return(  
        
        <Fragment>
        <div>{arr1[1]}{arr2[1]}</div>
        <div>{arr1[2]}{arr2[2]}</div>
        <div>{arr1[3]}{arr2[3]}</div>
        <div>{arr1[4]}{arr2[4]}</div>
        <div>{arr1[5]}{arr2[5]}</div>
        <div>{arr1[6]}{arr2[6]}</div>
        <div>{arr1[7]}{arr2[7]}</div>
        <div>{arr1[8]}{arr2[8]}</div>
        <div>{arr1[9]}{arr2[9]}</div>
        </Fragment>
    )
}

export class myinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 'დააჭირეთ - ან + ',
            arr: []
        }
    }
    handlePlusClick = () => {
        if (typeof(this.state.count) === 'string'){
            this.setState({ count: 0 });
        } 
        else{
            this.setState({ count: this.state.count + 1 })
            arr1.push(<Headers headers={this.state.count}/>)
            arr2.push(<Text text={this.state.count}/>)
            if (this.state.count === 10){
                this.setState({ count: 0 });
            }
        }
        
    }
    handleMinusClick = () => {
        if (typeof(this.state.count) === 'string') {
            this.setState({ count: 0 });
        }  
        else{
            this.setState({ count: this.state.count - 1})
            const i = arr1.indexOf(this.state.count);
            arr1.splice(i,1);
            const e = arr2.indexOf(this.state.count);
            arr2.splice(e,1);
            if (this.state.count === -10){
                this.setState({ count: 0 });
            }
        }
        
    }
    render(){
        return (
            <div style={{height:"500px", color:"blue"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                <button className="postbutton" onClick={this.handleMinusClick}>-</button>
                <input style={{textAlign:"center", margin:"0"}} type="text" value={this.state.count}/>
                <button className="postbutton" onClick={this.handlePlusClick}>+</button>
                </div>
                <div className="postdiv">
                <Poster />
                </div>
            </div>
            
        );
    }
}
export default myinfo;