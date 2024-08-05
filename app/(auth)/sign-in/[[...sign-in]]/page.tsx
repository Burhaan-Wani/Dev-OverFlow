import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
    console.log("hi there");
    return <SignIn />;
};

export default page;
