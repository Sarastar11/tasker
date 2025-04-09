import React, { useState, forwardRef, useMemo } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { useNotifications } from "../../Contexts/NotificationContext";
import { useNavigate } from "react-router-dom"; 
import NotificationItem from "./NotificationItem"; 
import notification from "../assets/icons/notification.svg";

// Custom dropdown toggle with notification badge
const CustomToggle = forwardRef(({ onClick, unreadCount }, ref) => (
  <button 
    ref={ref} 
    className="position-relative notification-icon bg-transparent border-0"
    onClick={(e) => { 
      e.preventDefault();
      onClick(e);
    }}
    style={{ cursor: "pointer" }}
  >
    <img src={notification} width={24} height={24} alt="Notifications" />
    {unreadCount > 0 && (
      <Badge className="notification-badge bg-danger">{unreadCount}</Badge>
    )}
  </button>
));

const NotificationList = () => {
  const navigate = useNavigate(); 
  const { notifications } = useNotifications();
  const [showDropdown, setShowDropdown] = useState(false);

  // Optimize unread count calculation
  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  const handleNotificationClick = (note) => {
    if (note.link) {
      navigate(note.link); 
    }
    setShowDropdown(false); 
  };

  return (
    <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
      <Dropdown.Toggle as={CustomToggle} unreadCount={unreadCount} />

      <Dropdown.Menu align="end" style={{ width: "372px" }}>
        {notifications.length === 0 ? (
          <Dropdown.Item disabled className="text-muted">No new notifications</Dropdown.Item>
        ) : (
          notifications.map((note) => (
            <Dropdown.Item 
              key={note.id} 
              className="p-0"
              onClick={() => handleNotificationClick(note)}
            >
              <NotificationItem 
                title={note.title} 
                message={note.message} 
                time={note.time} 
                color={note.color} 
                icon={note.icon} 
                link={note.link}
              />
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationList;
