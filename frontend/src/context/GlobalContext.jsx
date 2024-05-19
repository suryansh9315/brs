import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("sessionToken");
    setToken(null);
    setUser(null);
  }

  const findOldUser = async () => {
    try {
      const old_token_raw = localStorage.getItem("sessionToken");
      if (old_token_raw) {
        const old_token = JSON.parse(old_token_raw);
        const res = await fetch("http://localhost:8080/api/auth/check-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: old_token,
          }),
        });
        const data = await res.json();
        console.log(data)
        if (res.status === 200) {
          setToken(old_token);
          setUser(data.user);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findOldUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, token, logout, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
