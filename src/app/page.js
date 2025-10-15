"use client";
import React from "react";
import Postslist from "./components/Postslist";

export default function Home() {
  return (
   <div className="container">
    <h1>Posts List</h1>
    <Postslist/>
   </div>
  );
}
