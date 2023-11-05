import React from 'react';
import { Button, Space, Row, Col, Divider } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import './ButtonView.css'

const ButtonView = () => {
    return (
        <>
            <Space align="center" direction="vertical" style={{ width: '100%' }}>
                <Space align="center" direction="horizontal" style={{ width: '100%' }}>
                    <Button><CaretLeftOutlined /></Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button><CaretRightOutlined /></Button>
                </Space>
                <Divider dashed />
            </Space>
        </>
    )
}

export default ButtonView