import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFirstCom from './myFirstCom';
import ComponentOne from './TenComponents/ComponentOne';
import ComponentTwo from './TenComponents/ComponentTwo';
import ComponentThree from './TenComponents/ComponentThree';
import ComponentFour from './TenComponents/ComponentFour';
import ComponentFive from './TenComponents/ComponentFive';
import ComponentSix from './TenComponents/ComponentSix';
import ComponentSeven from './TenComponents/ComponentSeven';
import ComponentEight from './TenComponents/ComponentEight';
import ComponentNine from './TenComponents/ComponentNine';
import ComponentTen from './TenComponents/ComponentTen';
import MasterComponent from './Tencomponents/MasterComponenet';

ReactDOM.render(
  <React.StrictMode>
    <MyFirstCom />
    <ComponentOne />
    <ComponentTwo />
     <ComponentThree />
      <ComponentFour />
       <ComponentFive />
        <ComponentSix />
         <ComponentSeven />
          <ComponentEight />
           <ComponentNine />
            <ComponentTen />
            <MasterComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
