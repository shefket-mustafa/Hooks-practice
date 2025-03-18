import React from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
const count = 3;

const Chat = ({ messages}) => {
  

  
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={messages}
      renderItem={(message) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          {/* <Skeleton avatar title={false} loading={message.loading} active> */}
            <List.Item.Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
              title={<a href="https://ant.design">{message.author}</a>}
              description={message.content}
            />
            <div>content</div>
          {/* </Skeleton> */}
        </List.Item>
      )}
    />
  );
};
export default Chat;