/* eslint-disable react-refresh/only-export-components */
import { useFormik } from "formik";
import * as yup from "yup";
import React, { createContext, useContext, useState } from "react";

const OfferContext = createContext();
//  using yup for validation schema
const mySchema = yup.object({
  price: yup.string().required("*"),
  description: yup.string().required("*"),
  date: yup.string().required("*"),
  time: yup.string().required("*"),
});

export const OfferProvider = ({ children }) => {
  const [offer, setOffer] = useState(false);
  const [submittedPrice, setSubmittedPrice] = useState(false);

  const makeOffer = useFormik({
    initialValues: {
      price: "",
      description: "",
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      setOffer(true);
      setSubmittedPrice(values.price);
    },
    validationSchema: mySchema,
  });
  const [status, setStatus] = useState("pending");
  return (
    <OfferContext.Provider
      value={{
        status,
        setStatus,
        offer,
        setOffer,
        submittedPrice,
        setSubmittedPrice,
        makeOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};

export function useOffers() {
  return useContext(OfferContext);
}
