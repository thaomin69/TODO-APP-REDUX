import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';

// Bản đồ màu cho từng mức ưu tiên
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

function Todo({ name, prioriry }){
    const [checked, setChecked] = useState(false);

    //đảo trạng thái của Checkbox khi user nhấp vào
    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    // Xác định style cho hàng "todo" dựa trên trạng thái của Checkbox
    const getTodoStyle = () => {
        if (checked) {
            return { 
                marginBottom: 3, 
                opacity: 0.5, 
                textDecoration: 'line-through' 
            };
        }
        return { marginBottom: 3 };
    };

    return (
        <Row justify='space-between' style={getTodoStyle()}>
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                {prioriry}
            </Tag>
        </Row>
  );
}

export default Todo;