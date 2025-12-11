import React, { use } from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "@/models/User";
const Username = ({ params }) => {
    const resolvedParams = use(params); // unwrap the Promise
    return (
        <>
            <PaymentPage username={resolvedParams.username} />
        </>);
};
export default Username;