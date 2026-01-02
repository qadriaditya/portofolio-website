"use client";
import React from "react";
import Navbar from "./Navbar";
import MainContentClient from "./MainContentClient";

export default function AppShellClient() {
  return (
    <div>
      <Navbar />
      <MainContentClient />
    </div>
  );
}
