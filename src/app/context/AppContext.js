"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [topArtists, setTopArtists] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/top-artists")
        .then((res) => {
          if (res.status === 401) {
            console.error("Unauthorized: Signing out...");
            signOut(); // Clear session and redirect to sign-in
            return [];
          }
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setTopArtists(data);
            setUserName(session.user.name.split(" ")[0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching top artists:", error);
        });
    }
  }, [status, session]);

  return (
    <AppContext.Provider value={{ userName, session, status, topArtists }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
