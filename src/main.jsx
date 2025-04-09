// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css';

import App from './App.jsx';
import Home from "./MainPages/pages/home/home.jsx";
import ContactUs from "./MainPages/pages/contactUs/contactUs.jsx";
import Services from "./MainPages/pages/services/services.jsx";
import { StrictMode } from "react";
import ProfileForm from "./clientPages/BecomeWorker/BecomeWorker.jsx";
import ClientPages from "./clientPages/client-profile/MainComponent.jsx";
import ClientProfile from "./clientPages/client-profile/ClientProfile.jsx";
import PlaceOrder from "./clientPages/PlaceOrder/PlaceOrder/PlaceOrder.jsx";
import Login from "./MainPages/pages/login/login.jsx";
import Register from "./MainPages/pages/register/register.jsx";
import OrderDetails from "./clientPages/PlaceOrder/OrderDetails/OrderDetails.jsx";
import { EditProvider } from "./Contexts/EditInfoContext.jsx";
import { NotificationProvider } from "./Contexts/NotificationContext.jsx";
import { OfferProvider } from "./Contexts/OfferContext.jsx";
import EditInfo from "./clientPages/client-profile/Edit/Edit.jsx";
import PaymentDetails from "./clientPages/PlaceOrder/Payments/PaymentDetails.jsx";
import Orderprogress from "./clientPages/PlaceOrder/OrderProgressing/OrderProgress.jsx";
import Completed from "./clientPages/PlaceOrder/OrderProgressing/OrderCompleted.jsx";
import WorkerLayout from "./Layouts/WorkerLayout/WorkerLayout.jsx";
import Progress from "./clientPages/PlaceOrder/OrderProgressing/Progress.jsx";
import Profile from "./pages/Worker/Profile/Profile.jsx";
import Edit from "./pages/Worker/Profile/Information/Edit/Edit.jsx";
import EditDetails from "./pages/Worker/Profile/About/Edit/Edit.jsx";
import MakeOffer from "./pages/Worker/MakeOffers/MakeOffer.jsx";
import Chats from "./pages/Chats/Chats.jsx";
import SingleChat from "./pages/Chats/SingleChat/SingleChat.jsx";
import AllgemeineGeschaeftsbedingungen from "./MainPages/docs/AllgemeineGeschaeftsbedingungen";
import Datenschutzrichtlinie from "./MainPages/docs/Datenschutzrichtlinie";
import Richtlinien from "./MainPages/docs/Richtlinien";
import PrivacyPolicy from "./MainPages/docs/PrivacyPolicy";
import GeneralTermsAndConditions from "./MainPages/docs/GeneralTermsAndConditions";
import Guidelines from "./MainPages/docs/Guidelines";
import ForgetPassword from "./MainPages/Modals/forgotPassword.jsx";
import VerificationCode from "./MainPages/Modals/verificationCode.jsx";
import EmailVerification from "./MainPages/Modals/emailVerification.jsx";
import MainPagesLayout from "./Layouts/MaiPagesLayout/MainPagesLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPagesLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "contactUs",
            element: <ContactUs />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "becomeWorker",
            element: <ProfileForm />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "becomeWorker",
            element: <ProfileForm />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "client/place-order",
            element: <PlaceOrder />,
          },
          {
            path: "client/order-details",
            element: <OrderDetails />,
          },
          {
            path: "client/profile",
            element: <ClientPages />,
          },
          {
            path: "client/home",
            element: <Home />,
          },
          {
            path: "client/services",
            element: <Services />,
          },
          {
            path: "client/contactUs",
            element: <ContactUs />,
          },
          {
            path: "client/editInfo",
            element: <EditInfo />,
          },
          {
            path: "client/payment",
            element: <PaymentDetails />,
          },
          {
            path: "client/confirm-worker",
            element: <Orderprogress />,
          },
          {
            path: "client/progress",
            element: <Progress />,
          },
          {
            path: "client/complete",
            element: <Completed />,
          },
          {
            path: "client/chats",
            element: <Chats />,
          },
          {
            path: "client/singleChat",
            element: <SingleChat />,
          },
          { path: "client/chats", element: <Chats /> },
          {
            path: "worker",
            element: <WorkerLayout />,
            children: [
              { index: true, element: <Profile /> },
             
              { path: "profile", element: <Profile /> },
              { path: "editInfo", element: <Edit /> },
              { path: "editDetails", element: <EditDetails /> },
              { path: "makeOffer", element: <MakeOffer /> },
              { path: "chats", element: <Chats /> },
              { path: "singleChat", element: <SingleChat /> },
            ],
          },
          { path: "AllgemeineGeschaeftsbedingungen", element: <AllgemeineGeschaeftsbedingungen /> },
          { path: "Datenschutzrichtlinie", element: <Datenschutzrichtlinie /> },
          { path: "Richtlinien", element: <Richtlinien /> },
          { path: "GeneralTermsAndConditions", element: <GeneralTermsAndConditions /> },
          { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
          { path: "Guidelines", element: <Guidelines /> },
          { path: "forgotPassword", element: <ForgetPassword /> },
          { path: "emailVerification", element: <EmailVerification/> },
          { path: "verificationCode", element: <VerificationCode /> },

        ],
      },

    ]
  }]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <EditProvider>
      <OfferProvider>
        <NotificationProvider>

          <RouterProvider router={router} />

        </NotificationProvider>
      </OfferProvider>
    </EditProvider>
  </StrictMode>
);
