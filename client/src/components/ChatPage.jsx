import { Spin } from "antd";
import Chat from "./Chat"
import useFetch from "../hooks/useFetch"

const url = 'http://localhost:3030/jsonstore/messenger';

export default function ChatPage() {
    const [pending, messages] = useFetch(url, []);

    if(pending){
        return <Spin />
    }

  return (
        <>
        
     <Chat messages = {messages}/></>
    )
}