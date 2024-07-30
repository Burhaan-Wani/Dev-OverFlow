import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
    return (
        <>
            <UserButton />
            <h1 className="h1-bold">hi there</h1>
        </>
    );
};

export default page;
