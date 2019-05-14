import Login from "views/AuthPages/Login";

var authRoutes = [
  { path: "/login", name: "Login", component: Login },
  { redirect: true, to: "/login" }
];

export default authRoutes;
