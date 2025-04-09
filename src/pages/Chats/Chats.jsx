import React from "react";
import "./Styles/Chats.css";
import "./Styles/responsive.css";
import home from "../../assets/images/Home.svg";
import avatar from "../../assets/images/Avatar.svg";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import SingleChat from "./SingleChat/SingleChat";

const chats = [
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

const Chats = () => {
  return (
    <div className="Chats container">
      <div>
        <style>
          {`
                    .breadcrumb {
                      --bs-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E");
                    }
                  `}
        </style>
        <div className="breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <img src={home} alt="" />
                </Link>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                <Link to="/worker/profile" className="link-breadcrumb">
                  My Profile
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/chats" className="link-breadcrumb">
                  Chats
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="msgs container ">
        <div className="totalMsgs shadow-sm">
          <div className="srh">
            <input type="search" className="shadow-sm" placeholder="search" />
          </div>
          {chats.map((message, index) => (
            <div className="chatList " key={index}>
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

        <SingleChat />
      </div>
    </div>
  );
};

export default Chats;
