

// import MyFirstCom from './myFirstCom';
// import ComponentOne from './TenComponents/ComponentOne';
// import ComponentTwo from './TenComponents/ComponentTwo';
// import ComponentThree from './TenComponents/ComponentThree';
// import ComponentFour from './TenComponents/ComponentFour';
// import ComponentFive from './TenComponents/ComponentFive';
// import ComponentSix from './TenComponents/ComponentSix';
// import ComponentSeven from './TenComponents/ComponentSeven';
// import ComponentEight from './TenComponents/ComponentEight';
// import ComponentNine from './TenComponents/ComponentNine';
// import ComponentTen from './TenComponents/ComponentTen';
// import MasterComponent from './Tencomponents/MasterComponent';
import Dashboard from './NewComponents/Dashboard';
import Parentcomponent from './TenComponents/Parentcomponent';













function App() {
  return (
    <div>
       {/* <MasterComponent name= 'name' /> */}
       <Parentcomponent name= 'beautiful' height= '200m' />
      
      <Dashboard firstname= 'he knows' Lastname= 'Someone' email= 'someone@gmail.com'  dateofbirth= '3/10/2021' mobile= '0243123456' />
      
      
      
     {/*   <MyFirstCom />
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
            <MasterComponent />
            <Parentcomponent /> */}

    </div>
  );
}

export default App;
