import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';

const { Search } = Input;

function Filters() {
    // Phần tử tiêu đề
    const renderTitle = (title) => (
        <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
            {title}
        </Typography.Paragraph>
    );

    // Bộ lọc theo trạng thái
    const statusFilter = (
        <>
            {renderTitle('Filter By Status')}
            <Radio.Group>
                <Radio value='All'>All</Radio>
                <Radio value='Completed'>Completed</Radio>
                <Radio value='Todo'>To do</Radio>
            </Radio.Group>
        </>
    );

    // Bộ lọc theo ưu tiên
    const priorityFilter = (
        <>
            {renderTitle('Filter By Priority')}
            <Select mode='multiple' allowClear placeholder='Please select' style={{ width: '100%' }}>
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
        </>
    );

    return (
        <Row justify='center'>
            <Col span={24}>
                {renderTitle('Search')}
                <Search placeholder='input search text' />
            </Col>
            <Col sm={24}>
                {statusFilter}
            </Col>
            <Col sm={24}>
                {priorityFilter}
            </Col>
        </Row>
    );
}

export default Filters;