import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "People",
    path: "/people",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "AddPeople",
    path: "/people-add",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-subtext",
  },
  {
    title: "PeopleDetails",
    path: "/people-details",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-subtext",
  },
  {
    title: "Languages",
    path: "/languages",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];