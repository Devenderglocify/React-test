import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Count from './Component/Count';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import Stylesheet from './Component/Stylesheet';
import InlineStyle from './Component/InlineStyle';
import Form from './Component/Form';
import LifeCycle from './Component/LifeCycle';
import Fragment from './Component/Fragment';
import Tables from './Component/Tables';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tables />
        {/* <Fragment /> */}
        {/* <LifeCycle /> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Form /> */}
        {/* <InlineStyle /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Count /> */}
         {/* <Message /> */}
        {/* <Greet name="Devi" work="Designer">
          <p>This is Child prop</p>
        </Greet> */}
        {/* <Greet name="Singh" work="developer" />
        <Greet name="roghiy" work="Seo" /> */}
        {/* <Welcome name="Devi1" work="Designer1" /> */}
        {/*<Welcome name="Devi2" work="Designer2" />
        <Welcome name="Devi3" work="Designer3" /> */}
        {/* 
         <Hello /> */}
      </header>
    </div>
  );
}

export default App;
