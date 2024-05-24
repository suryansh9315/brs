import { createContext, useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    window.location.reload();
  };

  const findOldUser = async () => {
    try {
      const old_user = localStorage.getItem("userInfo");
      // const theUser = localStorage.getItem("user");
      // if (theUser && !theUser.includes("undefined")) {
      //   return setUser(JSON.parse(theUser));
      // }
      if (old_user) {
        const old_user_info = JSON.parse(old_token_raw);
        if (old_user_info.type === "email") {
          const res = await fetch(
            "https://brs-backend-z4da.onrender.com/api/auth/check-token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: old_user_info.token,
              }),
            }
          );
          const data = await res.json();
          console.log(data);
          if (res.status === 200) {
            setUser({ user: data.user, token: data.token, type: "email" });
          }
        } else {
          setUser({
            user: old_user_info.user,
            token: old_user_info.token,
            type: "google",
          });
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
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      </div>
    );
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
