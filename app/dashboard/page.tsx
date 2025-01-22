"use client"
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const supabase = createClient();
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
          };
          checkAuth();
    
        // Subscribe to auth state changes
        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
          setUser(session?.user || null);
        });
    
        return () => {
            authListener?.subscription.unsubscribe();
        };
      }, [supabase.auth]);
  return (
    <>
    
      <h1>Dashboard</h1>
      <p>Hello, {user?.user_metadata.first_name}!</p>
    </>
  );
};

export default Dashboard;
