import React from 'react'
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectTodo,
  } from '../../features/todo/todoSlice';
const TodoList = () => {
	const todos = useSelector(selectTodo);

	console.log(todos, 'todoooo')



    return (
        <ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} completed={todo.completed}  title={todo.title} description={todo.description} completed={todo.completed} />
			))}
	</ul>
    )
}

export default TodoList
