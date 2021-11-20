import React from 'react'
import { Typography, Space } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Navbar = () => {
    return (
        <Space direction="vertical">
            <Title type="success"  level={1}>navbar</Title>
        </Space>
    )
}

export default Navbar
