import React from "react";
import { Typography } from 'antd';
import "antd/dist/antd.css";
import "./scss/style.scss";

import Layout from './components/Layout'
import TodoList from './components/Todo'
import AddTodo from "./components/AddTodo";

const { Title } = Typography;

function App() {
  return (
    <Layout>
      <br />
      <Title level="1">Todo list</Title>


      <TodoList />
      <AddTodo />
    </Layout>


  );
}

export default App;
