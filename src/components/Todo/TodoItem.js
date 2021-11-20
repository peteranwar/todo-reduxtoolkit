import React from "react";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";
import { Row, Col, Tooltip } from "antd";
import { useDispatch } from "react-redux";

import { toggleComplete, deleteTodo, toggleCanceledTask, toggleActiveTask } from "../../features/todos/todoSlice";

const TodoItem = ({ id, title, completed, description, canceled, active }) => {
  const dispatch = useDispatch();

  function hanldeCompleteClick() {
    dispatch(toggleComplete({
      id: id,
      completed: !completed
    }))
  }

  function hanldeDeleteTask() {
    dispatch(deleteTodo({
      id: id,
    }))

    console.log('ff', id)
  }

  function hanldeCanceledTask() {
    dispatch(toggleCanceledTask({
      id: id,
      canceled: !canceled
    }))
  }

  function hanldeActiveTask() {
    dispatch(toggleActiveTask({
      id: id,
      active: !active
    }))
  }

  return (
    <Row  >
      <Col span={24}>
        <li className={`todo-item ${completed ? 'compolete' : 'uncompolete'} ${canceled ? 'canceled' : null}`} >
          <div>
            <p className="time">{title}</p> {active && <p className="active "> active </p>}
            <div className="description">{description}</div>
          </div>
          <div className="icons">
            <Tooltip title="Delete task" color="red" >
              <span onClick={hanldeDeleteTask} className="icon delete">
                <AiFillDelete color="white" />
              </span>
            </Tooltip>

            <span onClick={hanldeActiveTask} className="icon edit">
              <MdModeEditOutline color="white" />
            </span>
            <span onClick={hanldeCompleteClick} className={`icon ${completed ? 'compolete' : 'uncompolete'}`}>
              <BsCheck2All color="white" />
            </span>
            <span onClick={hanldeCanceledTask} className="icon canceled">
              <AiOutlineClose color="white" />
            </span>
          </div>
        </li>
      </Col>
    </Row>
  );
};

export default TodoItem;
