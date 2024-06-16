import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            "Project-ID": "54dbceb1-8f12-4da6-80ef-cb4b50226864",
            "User-Name": username,
            "User-Secret": password,
        };

        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject,
            });
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
        } catch (error) {
            setError("Ooops , wrong credentiels!");
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Username"
                        className="input"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="input"
                        required
                    />
                    <div align="center">
                        <button
                            type="Submit"
                            className="button"
                            onSubmit={handleSubmit}
                        >
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="erro">{error}</h2>
                </form>
            </div>
        </div>
    );
};
export default LoginForm;