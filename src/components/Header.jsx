import React from "react";
import { FaHome } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { ImBinoculars } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";
import { AiFillEdit, AiFillBell } from "react-icons/ai";

function Header() {
  return (
    <>
      <nav className="nav">
        <img
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
        />

        <div className="nav-ic">
          <button title="Home">
            <FaHome />
          </button>
          <button title="Explore">
            {" "}
            <ImBinoculars />
          </button>
          <button title="Edit">
            <AiFillEdit />
          </button>
          <button title="Notification">
            <AiFillBell />
          </button>
          <button title="Profile">
            {" "}
            <VscAccount />
          </button>
          <button
            style={{ color: "#3683F0", background: "#F0F0F0", fontSize: 22 }}
          >
            <HiDotsVertical />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
