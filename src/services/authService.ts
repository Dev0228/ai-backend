import jwt from "jsonwebtoken";

import { config } from "../config";

const JWT_SECRET = config.JWT_SECRET;

const users = [
  {
    id: "1",
    email: "admin@aidonic.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "user@aidonic.com",
    password: "user123",
    name: "Regular User",
    role: "user",
  },
];

export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: "24h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
  } catch (error) {
    return null;
  }
};

export const findUserByEmailAndPassword = (email: string, password: string) => {
  return users.find((u) => u.email === email && u.password === password);
};

export const findUserById = (id: string) => {
  return users.find((u) => u.id === id);
};
