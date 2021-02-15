import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css';


const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="a177d3ce-43c9-4947-8f29-1aa7ddcb562a"
            userName="zfinnan"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;