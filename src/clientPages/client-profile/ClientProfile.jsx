import React from 'react';
import Information from './Information';
import Orders from './Orders';
import MyReviews from './MyReviews';

export default function ClientProfile() {
  return (
    <div >
      <Information />
      <Orders />
      <MyReviews />
    </div>
  )
}
