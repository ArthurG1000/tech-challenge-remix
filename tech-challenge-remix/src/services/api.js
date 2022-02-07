import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const fetchRoyalFamily = async () => {
  return (await axios(`${API_URL}/getfamily`)).data;
};

export const fetchRoyalAssets = async () => {
  return (await axios(`${API_URL}/getassets`)).data;
};

export const fetchNewMessage = async (data) => {
  return (
    await axios.post(`${API_URL}/postmessage`, data)
  ).data;
};