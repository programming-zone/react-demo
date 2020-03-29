import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: this.props.value,
     }

     formatCount() {
         const {count} = this.state;
         return count === 0 ? "Zero" : count;
     };
     getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
     }

     handleIncrement = () => {
         console.log("Clicked");
         this.setState({count: this.state.count + 1});
     };


    render() { 

        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span><br />
                <button className="btn btn-secondary byn-sm" onClick={this.handleIncrement}>Increment</button>
            </div>
         );
    }
}
 
export default Counter;