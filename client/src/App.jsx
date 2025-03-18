

import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";



function App() {
  


  return (
    <>

    <Navigation />

    <Routes>

    <Route index element={<HomePage />}/>

    <Route path='/chat' element={<ChatPage />}/>
      
    

    </Routes>
  
    
    </>
  )
}

export default App
