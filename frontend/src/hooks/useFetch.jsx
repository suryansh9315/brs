import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credential: response.credential }),
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        console.log(data)
        if (data?.user) {
          setUser({ user: data.user, token: data.user.token, type: "google" });
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              user: data.user,
              token: data.user.token,
              type: "google",
            })
          );
          navigate("/");
        }
        toast.error(data?.message || data);
        throw new Error(data?.message || data);
      })
      .catch((error) => {
        setError(error?.message);
        toast.error("Something went wrong")
      });
  };
  return { loading, error, handleGoogle };
};

export default useFetch;
