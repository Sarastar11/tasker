import React, { useState, forwardRef } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { useNotifications } from "../../Contexts/NotificationContext";
import NotificationItem from "./NotificationItem";
import notification from "../../assets/icons/notification.svg";

// Custom Toggle to Remove Arrow
const CustomToggle = forwardRef(({ onClick, unreadCount }, ref) => (
  <div
    ref={ref}
    className="position-relative notification-icon"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <img src={notification} width={24} height={24} alt="Notifications" />
    {unreadCount > 0 && (
      <Badge className="notification-badge bg-danger">{unreadCount}</Badge>
    )}
  </div>
));

const NotificationList = () => {
  const { notifications } = useNotifications();
  const unreadCount = notifications.filter((n) => !n.read).length;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Dropdown
      show={showDropdown}
      onToggle={(isOpen) => setShowDropdown(isOpen)}
    >
      {/* Custom Toggle */}
      <Dropdown.Toggle as={CustomToggle} unreadCount={unreadCount} />

      {/* Notification List */}
      <Dropdown.Menu align="end" style={{ width: "372px" }}>
        {notifications.length === 0 ? (
          <Dropdown.Item disabled className="text-muted">
            No new notifications
          </Dropdown.Item>
        ) : (
          notifications.map((note) => (
            <Dropdown.Item key={note.id} className="p-0">
              <NotificationItem
                title={note.title}
                message={note.message}
                time={note.time}
                color={note.color}
                icon={note.icon}
              />
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationList;
