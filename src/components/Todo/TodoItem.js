import React from "react";

import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";

import { toggleComplete, deleteTask } from "../../features/todo/todoSlice";

const TodoItem = ({id, title, completed, description }) => {
  const dispatch = useDispatch();

  function hanldeCompleteClick () {
    dispatch(toggleComplete({
      id: id,
      completed: !completed
    }))
  }

  return (
    <Row  >
      <Col span={24}>
        <li className={`todo-item ${completed ? 'active': 'unactive'}`} >
          <div>
            <p className="time">{title}</p>
             <div className="description">{description}</div>
          </div>
          <div className="icons">
            <span onClick={() => dispatch(deleteTask(id))} className="icon delete">
              <AiFillDelete color="white" />
            </span>
            <span className="icon edit">
              <MdModeEditOutline color="white" />
            </span>
            <span onClick={hanldeCompleteClick} className={`icon ${completed ? 'active': 'unactive'}`}>
              <BsCheck2All color="white" />
            </span>
            {/* <span className="icon unactive">
              <BsCheck2All color="white" />
            </span> */}
          </div>
        </li>
      </Col>
    </Row>
  );
};

export default TodoItem;
