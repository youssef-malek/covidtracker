import { ChatEngine } from "react-chat-engine";


import './components/ChatFeed';
import './App.css';


const App = ()=>{
   return (
   <ChatEngine 
            height = "100vh"
            projectID = "54dbceb1-8f12-4da6-80ef-cb4b50226864"
            userName = "youssef.ait.malek1@gmail.com"
            userSecret ="4f5S2@4f4h@hfjkGfw4"
            renderChatFeed ={(ChatFeedProps)=> <ChatFeed {...ChatFeedProps}/>}

    />
)
}

export default App;