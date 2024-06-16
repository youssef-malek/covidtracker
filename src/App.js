import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";

import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID="54dbceb1-8f12-4da6-80ef-cb4b50226864"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(ChatFeedProps) => <ChatFeed {...ChatFeedProps} />}
        />
    );
};

export default App;