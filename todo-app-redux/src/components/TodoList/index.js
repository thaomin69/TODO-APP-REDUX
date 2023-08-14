import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';

function TodoList() {
    // Render danh sách các công việc
    const renderTodoItems = () => (
        <>
            <Todo name='Learn React' prioriry='High' />
            <Todo name='Learn Redux' prioriry='Medium' />
            <Todo name='Learn JavaScript' prioriry='Low' />
        </>
    );

    // Render trình nhập công việc mới
    const renderTodoInput = () => (
        <Input.Group style={{ display: 'flex' }} compact>
            <Input />
            <Select defaultValue="Medium">
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
            <Button type='primary'>Add</Button>
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
