import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;

export const MONGODB_URI = process.env.MONGODB_URI;

export const SECRET_JWT = process.env.SECRET_JWT;

export const ROOT = {
  name: "2-mern-jwt",
  description: "App Web FullStack con JWT",
  author: "Naim Chaya",
  version: "1.0.0",
  endpoints: {
    products: "/products",
    signUp: "/signup(only POST)",
  },
};
