import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Modal, Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";


const AddToDo = () => {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [task, setTask] = useState();



  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (!task) {
      return;
    }
    dispatch(addTodo({
      title: task
    }))
    setTask("")
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="add-todo" onClick={showModal}>
        <div className="icon">
          <GrAdd fontSize="1.5em" />
        </div>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Type any task"
          />
        </form>
      </Modal>
    </>
  );
};

export default AddToDo;
