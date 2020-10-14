// import React, { Component } from 'react';

// class ClickComponent extends Component {
//     state={
//         number: 0
//     }
     
//     incement = () => {
//         this.setState((previousState) => {

//             return{
//                 number: previousState.number + 1
//             }
//         })
//         // console.log('a');

//         // fetch("http://localhost:3000/reviewsfdjsklfjldss")
//         //     .then(resp => {
//         //         if(resp.status !== 200) {
//         //             throw new Error(resp.statusText);
//         //         }
//         //         console.log('b', resp);
//         //         return resp.json();
//         //     })
//         //     .then(data => console.log('c', data))
//         //     .catch(errors => console.log('d', errors))

//         // console.log('e')

//         // a, e, b, c
//     }

//     decrement = () => {
//         this.setState((previousState) => ({
//                 number: previousState.number - 1
//         }))   
//     }

//     render() {
//         return (
//             <div>
//                 <button name="increment" onClick={this.incement}>+</button>
//                 <button name="decrement" onClick={this.decrement}>-</button>
//                 {this.state.number}
//             </div>
//         );
//     }
// }

// export default ClickComponent;