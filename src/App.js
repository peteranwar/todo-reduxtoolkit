import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "antd/dist/antd.css";
import "./scss/style.scss";

import Layout from './components/Layout'
import TodoList from './components/Todo'
import AddTodo from "./components/AddTodo";
function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <Counter />
    //   </header> */}
    // </div>

    <Layout>
              <h1>Todo list</h1>
              <TodoList />
              <AddTodo />
    </Layout>

  
  );
}

export default App;
