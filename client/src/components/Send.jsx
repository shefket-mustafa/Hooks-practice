import { Button, Input, message } from "antd";
import { SendOutlined } from '@ant-design/icons'
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";

export default function Send() {
    const [messageApi, contextHolder] = message.useMessage();
    const { values, changeHandler} = useForm({
        message: '',

    })
   
    const formSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const message = formData.get('message');

        const response = await fetch('http://localhost:3030/jsonstore/messenger',{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                author: 'John Doe',
                content: message
            })
        })

        messageApi.open({
            type:"success",
            content: 'Message sent successfully'
        })

        
    }
  return (
    <>
    {contextHolder}
      <form onSubmit={formSubmit}>
        <Input 
        size="large" 
        placeholder="large size" 
        name="message" 
        value={values.message}
        onChange={changeHandler}
        prefix={<SendOutlined />} />
        <Button type="primary" htmlType="submit">Send</Button>
      </form>

      </>
    );
}