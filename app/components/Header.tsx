"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../styles/_header.scss";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);
  console.log(openMenu);
  return (
    <div className="main">
      <Image
        height={30}
        width={177}
        src="/imgs/rommate2-05.png"
        alt="Description of Image"
      />
      <div
        className="rightSide"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <button className="btn" style={{ color: "yellow" }}>
          Login
        </button>
        <div className="burgerDiv">
          {openMenu ? (
            <svg
              onClick={() => setOpenMenu(!openMenu)}
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.821429 3.69643H22.1786C22.6323 3.69643 23 3.32869 23 2.875V0.821429C23 0.367743 22.6323 0 22.1786 0H0.821429C0.367743 0 0 0.367743 0 0.821429V2.875C0 3.32869 0.367743 3.69643 0.821429 3.69643ZM6 11.9107H22.1786C22.6323 11.9107 23 11.543 23 11.0893V9.03571C23 8.58203 22.6323 8.21429 22.1786 8.21429H6C5.54631 8.21429 5.17857 8.58203 5.17857 9.03571V11.0893C5.17857 11.543 5.54631 11.9107 6 11.9107ZM0.821429 20.125H22.1786C22.6323 20.125 23 19.7573 23 19.3036V17.25C23 16.7963 22.6323 16.4286 22.1786 16.4286H0.821429C0.367743 16.4286 0 16.7963 0 17.25V19.3036C0 19.7573 0.367743 20.125 0.821429 20.125Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setOpenMenu(!openMenu)}
              className="d-block d-md-none burgerMenu_icon"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0C5.16235 0 0 5.16235 0 11.5C0 17.8377 5.16235 23 11.5 23C17.8377 23 23 17.8377 23 11.5C23 5.16235 17.8377 0 11.5 0ZM11.5 2.3C16.5946 2.3 20.7 6.40536 20.7 11.5C20.7 16.5946 16.5946 20.7 11.5 20.7C6.40536 20.7 2.3 16.5946 2.3 11.5C2.3 6.40536 6.40536 2.3 11.5 2.3ZM7.71309 6.08691L6.08691 7.71309L9.87383 11.5L6.08691 15.2869L7.71309 16.9131L11.5 13.1262L15.2869 16.9131L16.9131 15.2869L13.1262 11.5L16.9131 7.71309L15.2869 6.08691L11.5 9.87383L7.71309 6.08691Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
