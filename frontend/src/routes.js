
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import ContactUs from "views/ContactUs.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upload from "views/Upload.js";
import Search from "antd/es/input/Search";

const dashboardRoutes = [
  {
    path: "/",
    name: "Idea To Domain",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Tool Kit",
    icon: "nc-icon nc-circle-09",
    component: Upload,
    layout: "/admin"
  },
 
  {
    path: "/ContactUs",
    name: "ContactUs",
    icon: "nc-icon nc-paper-2",
    component: ContactUs,
    layout: "/admin"
  },
  {
    path: "/dummy",
    name: "dummy",
    icon: "nc-icon nc-atom",
    component: ContactUs,
    layout: "/admin"
  },

  
];

export default dashboardRoutes;
