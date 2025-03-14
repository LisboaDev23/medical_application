import React from "react";
import Link from "next/link";

export const Home = () => {
    

    return (
        <>
        <h1>Olá</h1>
        <div>
            <Link href={"/doctor/create"}>Create new doctor</Link>
            <Link href={"/appointment/create"}>Create new appointment</Link>
            <Link href={"/pacient/create"}>Create new pacient</Link>
            <Link href={"/prescription/create"}>Create new prescription</Link>
        </div>
        </>
    )
}

export default Home;