import { useRef } from "react";

const Chatform = ({chatHistory,setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();
  const handleFormSubmit =(e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with user's message
    setChatHistory((history) => [...history, {role: "user",text: userMessage}]);

    // Add a "Thinking..." placeholder for the bot's response
    setTimeout(() => {
        setChatHistory((history) => [...history, {role: "model",text: "Thinking..."}]);

    //Call the function to generate the bot response
    generateBotResponse([...chatHistory, {role: "user",text: userMessage}]);
    },400);

  }

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-rounded">
arrow_upward
</button>
          </form>
  )
}

export default Chatform
