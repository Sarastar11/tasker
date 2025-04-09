import React from 'react';
import { Routes, Route } from "react-router-dom";
import ClientProfile from '../client-profile/ClientProfile';

export default function ClientPages() {
  return (
    <>
    <div style={{width: '78%', margin: 'auto'}}>
   <ClientProfile/>
    </div>
    </>
  )
}
