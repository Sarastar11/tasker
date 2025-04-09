import { createContext, useContext, useState, useEffect } from "react";
import accepted from "../clientPages/assets/icons/accepted.png";
import confirmOrder from '../clientPages/assets/icons/confirmOrder.png';
import assigned from '../clientPages/assets/icons/assigned.png';
import cancelled from '../clientPages/assets/icons/cancelled.png';
import completed from '../clientPages/assets/icons/completed.png';
import bell from '../clientPages/assets/icons/bell.png';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    try {
      const storedNotifications = localStorage.getItem("notifications");
      return storedNotifications ? JSON.parse(storedNotifications) : [
        { id: 1, title: "Order Accepted", message: "We have accepted your order. Click to view details.", time: "2 hrs ago", color: "rgba(255, 160, 51, 1)", icon: accepted, read: false, link: null },
        { id: 2, title: "Confirm Order", message: "We have added items in your order. Please check and confirm.", time: "12:03 PM", color: "rgba(149, 123, 249, 1)", icon: confirmOrder, read: false, link: null },
        { id: 3, title: "Order Assigned", message: "We have assigned your order to a worker. Click to view details.", time: "2 hrs ago", color: "rgba(88, 166, 251, 1)", icon: assigned, read: false, link: null },
        { id: 4, title: "Order Completed", message: "Your order has been completed. Click to view details.", time: "02:03 PM", color: "rgba(63, 173, 70, 1)", icon: completed, read: false, link: null },
        { id: 5, title: "Order Cancelled", message: "Your order has been cancelled. Click to view details.", time: "2 hrs ago", color: "rgba(234, 106, 106, 1)", icon: cancelled, read: false, link: null },
        { id: 6, title: "Announcement", message: "Our service will be down tomorrow for planned maintenance.", time: "2 hrs ago", color: "rgba(70, 70, 70, 1)", icon: bell, read: false, link: null },
      ];
    } catch (error) {
      console.error("Failed to load notifications:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Add a new notification
  const addNotification = (newNotification) => {
    const newNotif = { id: Date.now(), ...newNotification, read: false };
    setNotifications((prev) => [newNotif, ...prev]);

    // Play a notification sound
    const audio = new Audio("/notification.mp3");
    audio.play().catch(() => {}); // Prevents autoplay errors in some browsers
  };

  // Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  // Get unread notification count
  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      markAsRead,
      markAllAsRead,
      clearNotifications,
      unreadCount,
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom Hook to use the NotificationContext
export function useNotifications() {
  return useContext(NotificationContext);
}
