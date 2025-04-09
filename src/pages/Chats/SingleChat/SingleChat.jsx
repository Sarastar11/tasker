import React, { useState } from "react";
import avatar from "../../../assets/images/Avatar.svg";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import "../Styles/Chats.css";
const SingleChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hey mo!", sender: "bot", time: "12:30 PM" },
    { text: "How’s your project going?", sender: "bot", time: "12:31 PM" },
    { text: "Hi AH*****!", sender: "user", time: "12:32 PM" },
    {
      text: "It’s going well. Thanks for asking!",
      sender: "user",
      time: "12:32 PM",
    },
    {
      text: "No worries. Let me know if you need any help 😉",
      sender: "bot",
      time: "12:33 PM",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);

    // Simulated bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm here to help! 😊",
          sender: "bot",
          time: newMessage.time,
        },
      ]);
    }, 1000);

    setInput("");
  };
  return (
    <div className="chat shadow-sm singleChat">
      <div className="box">
        <div className="navbar">
          <img src={avatar} alt="" />
          <h3>AH**** *****</h3>
        </div>

        <div className="chat-box mt-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex ${
                msg.sender === "user" ? "justify-content-end" : ""
              } mb-2`}
            >
              <div
                className={`p-2 rounded ${
                  msg.sender === "user" ? "bg-warning text-white" : "bg-light"
                }`}
                style={{ maxWidth: "70%" }}
              >
                <p className="mb-0">{msg.text}</p>
                <small
                  className="d-block text-end text-muted"
                  style={{ fontSize: "10px" }}
                >
                  {msg.time}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-start mt-3">
        <button className="btn attatch">
          <FaPlus style={{ color: "#E4914A" }} />
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-warning ms-2" onClick={handleSend}>
          <FaPaperPlane style={{ color: "#fff" }} />
        </button>
      </div>
    </div>
  );
};

export default SingleChat;
