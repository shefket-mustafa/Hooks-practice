import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Chat',
    key: 'chat',
    icon: <AppstoreOutlined />,
    
  },
  
 
];
const Navigation = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;