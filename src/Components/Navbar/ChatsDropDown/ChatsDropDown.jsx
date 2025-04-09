import React from "react";
import "./styles/ChatsDropDown.css";
import "./styles/responsive.css";
import avatar from "../../../assets/images/Avatar.svg";
import { Link } from "react-router-dom";
const messages = [
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 9,
    time: "2 hrs ago",
  },
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 9,
    time: "2 hrs ago",
  },
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 2,
    time: "2 hrs ago",
  },
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 9,
    time: "2 hrs ago",
  },
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 9,
    time: "2 hrs ago",
  },
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 9,
    time: "2 hrs ago",
  },
  {
    name: "Pe***** *****",
    message: "No worries. Let me know if you need any help 😉",
    unreadCount: 9,
    time: "2 hrs ago",
  },
];

const ChatsDropDown = ({ showChats }) => {
  return (
    <div className={`ChatsDropDown shadow ${showChats ? "d-block" : "d-none"}`}>
      <div className="container">
        <Link to="/chats" className="link">
          See All
        </Link>
        {messages.map((message, index) => (
          <div className="chatList" key={index}>
            <div className="avatar">
              <img src={avatar} alt={message.name} />
            </div>
            <div className="content">
              <h3>{message.name}</h3>
              <p>{message.message}</p>
            </div>
            <div className="time">
              <span className="badge"> {message.unreadCount}</span>
              <span className="hours">{message.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsDropDown;
