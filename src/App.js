import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Header } from './component/header';
import { Task1 } from './component/task1';
import { Task2 } from './component/task2';
import { Task3 } from './component/task3';

function App() {
  return (
    <div className="App"> 
      <Router>  
        <Header/>
        <Switch>
            <Route exact path="/Task1" component={Task1} />
            <Route path="/Task2"  component={Task2} />
            <Route path="/Task3"  component={Task3} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
