import React from "react";
import { useState } from "react";
import AddDishForm from "../AddDishForm/AddDishForm";
import Footer from "../Footer/Footer";
import "./CreatePlan.css";

function CreatePlan() {
return (
    <>
      <AddDishForm />
      <Footer />
    </>
)
}

export default CreatePlan;