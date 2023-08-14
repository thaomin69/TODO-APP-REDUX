import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import addTodo from '../../redux/actions';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

function TodoList() {

    const [todoName, setTodoName] = useState('');
    const [prioriry, setPriority] = useState('Medium');


    // Render danh sách các công việc
    const renderTodoItems = () => (
        <>
            <Todo name='Learn React' prioriry='High' />
            <Todo name='Learn Redux' prioriry='Medium' />
            <Todo name='Learn JavaScript' prioriry='Low' />
        </>
    );
    
    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        //dispatch(): bắn đi 1 action
        dispatch(addTodo({
            id: uuidv4(), //lấy ra id ngẫu nhiên và duy nhất
            name: todoName,
            prioriry: prioriry,
            completed: false
        }))
    };

    const handleInputChange = (e) => {
        console.log('handleInputChange', e.target.value);
        setTodoName(e.target.value); 
    };

    const handlePriorityChange = (value) => {
        // console.log({value});
        setPriority(value);
    };

    // Render trình nhập công việc mới
    const renderTodoInput = () => (
        <Input.Group style={{ display: 'flex' }} compact>
            <Input value = {todoName} onChange={handleInputChange} />
            <Select defaultValue="Medium" value={prioriry} onChange={handlePriorityChange}>
                <Select.Option value='High' label='High'>
                    <Tag color='red'>High</Tag>
                </Select.Option>
                <Select.Option value='Medium' label='Medium'>
                    <Tag color='blue'>Medium</Tag>
                </Select.Option>
                <Select.Option value='Low' label='Low'>
                    <Tag color='gray'>Low</Tag>
                </Select.Option>
            </Select>
            <Button type='primary' onClick={handleAddButtonClick}>Add</Button>
        </Input.Group>
    );

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            {/* Danh sách các công việc */}
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {renderTodoItems()}
            </Col>
            
            {/* Trình nhập công việc mới */}
            <Col span={24}>
                {renderTodoInput()}
            </Col>
        </Row>
    );
}

export default TodoList;
