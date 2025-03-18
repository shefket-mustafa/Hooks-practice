import React, { useState } from 'react';
import { HomeOutlined, SendOutlined, MessageOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from 'react-router'
const items = [
  {
    
    key: 'home',
    icon: <HomeOutlined />,
    label: <Link to={'/'}>Home</Link> 
  },
  {
    label: <Link to={'/chat'}>Chat</Link>,
    key: 'chat',
    icon: <MessageOutlined />,
  },
  {
    label: <Link to={'/send'}>Send</Link>,
    key: 'send',
    icon: <SendOutlined />,
  },
  
  
 
];
const Navigation = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;