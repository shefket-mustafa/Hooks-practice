

import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import Send from "./components/Send";



function App() {
  


  return (
    <>

    <Navigation />

    <Routes>

    <Route index element={<HomePage />}/>
    <Route path='/chat' element={<ChatPage />}/>
    <Route path='/send' element={<Send />}/>
      
    

    </Routes>
  
    
    </>
  )
}

export default App
