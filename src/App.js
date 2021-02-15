import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="a177d3ce-43c9-4947-8f29-1aa7ddcb562a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;