import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@tt.com",
    password: bcrypt.hashSync("123456", 6),
    isAdmin: true,
  },
  {
    name: "Bhagirath",
    email: "bhagirath@tt.com",
    password: bcrypt.hashSync("123456", 6),
    isAdmin: false,
  },
  {
    name: "Zala",
    email: "zala@tt.com",
    password: bcrypt.hashSync("123456", 6),
    isAdmin: false,
  },
];

export default users;
