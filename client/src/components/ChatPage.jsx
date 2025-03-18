import { Spin } from "antd";
import Chat from "./Chat"
import useFetch from "../hooks/useFetch"

const url = 'http://localhost:3030/jsonstore/messenger';

export default function ChatPage() {
    const [pending, messages] = useFetch(url, []);

  return (
        <>
        pending ?
    <Spin /> : <Chat messages = {messages}/></>
    );
}