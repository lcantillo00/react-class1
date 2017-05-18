import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stream from './components/Stream';

const tracks=[
    {
        title:'some track'
    },
    {
        title:'some other track'
    }
];
// class App extends React.Component{
//     //UI
//     render(){
//         return(
//         <div>
//           <h1>HELLO REACT!!</h1>
//         </div>
//         );
//     }
// }
ReactDOM.render(
    <Stream tracks={tracks} />,
        document.getElementById('app')
        // <App/>,
        // document.getElementById('app')


);
