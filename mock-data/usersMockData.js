import bcrypt from "bcrypt";

export const users = [
  {
    name: "Admin",
    email: "admin@tinytreasures.com",
    password: bcrypt.hashSync("123456", 6),
    isAdmin: true,
  },
  {
    name: "Bhagirath",
    email: "bhagirath@tinytreasures.com",
    password: bcrypt.hashSync("123456", 6),
    isAdmin: false,
  },
  {
    name: "Zala",
    email: "zala@tinytreasures.com",
    password: bcrypt.hashSync("123456", 6),
    isAdmin: false,
  },
];
