/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from "react";

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
};

export function useChat() {
  return useContext(ChatContext);
}
