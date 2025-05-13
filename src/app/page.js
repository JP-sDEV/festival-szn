"use client";

import LandingPage from "./landing";
import { AppProvider } from "./context/AppContext";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <AppProvider>
          <LandingPage />
        </AppProvider>
      </SessionProvider>
    </div>
  );
}
