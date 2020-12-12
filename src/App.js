//import logo from './logo.svg';
import './App.css';
import Decrement from './components/Decrement'
import Message from './components/Message'
import Timer from './components/Timer'
//import ToDoList from './components/ToDoList'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Login from './components/Login'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import Greet from '/components/Greet'

function App()
{
  return (
    <div className="App">
      <Login></Login>
      <Counter></Counter>
      <Decrement></Decrement>
      <Message ></Message>
      <Timer></Timer>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <List></List>
      <Greet></Greet>

    </div>
  )
}


export default App; 