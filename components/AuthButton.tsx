"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import UserIcon from "./UserIcon";
import { User } from "@supabase/supabase-js";

const AuthButton = () => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="relative">
      {!user ? (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
        >
          Login
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white"
          >
            <UserIcon />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-black">
              <ul>
                <li>
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="block px-4 py-2 text-sm w-full hover:bg-blue-100"
                  >
                    View Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm w-full hover:bg-blue-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthButton;
