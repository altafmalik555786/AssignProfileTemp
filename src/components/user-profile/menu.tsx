import React, { useState } from 'react'
import { Col, Input, Menu, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import style from './style.module.scss'

const Header = () => {
    const items = [
        {
            label: 'Find People',
            key: 'find',
        },
        {
            label: 'Message',
            key: 'message',
        },
        {
            label: 'My Contact',
            key: 'contact',
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <div className={style.headerTop}>
                <div className={style.container}>
                    <Row>
                        <Col md={4} sm={24} xs={24}>
                            <div className={style.logo}>
                                <img src="" alt="Logo" />
                            </div>
                        </Col>
                        <Col md={6} sm={16} xs={16}>
                            <div className={style.search}>
                                <Input
                                    placeholder="Enter your username"
                                    prefix={<SearchOutlined className="site-form-item-icon" />}
                                />
                            </div>
                        </Col>
                        <Col md={14} sm={8} xs={8}>
                            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Header