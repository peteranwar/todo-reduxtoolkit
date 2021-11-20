import React from 'react'
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectTodo,
  } from '../../features/todos/todoSlice';
const TodoList = () => {
	const todos = useSelector(selectTodo);




    return (
        <ul className='list-group'>
			{todos && todos.map((todo) => (
				<TodoItem id={todo.id} canceled={todo.canceled} active={todo.active} completed={todo.completed}  title={todo.title} description={todo.description} completed={todo.completed} />
			))}
	</ul>
    )
}

export default TodoList
