"use client";

import { useRef } from "react";
import Selector from "@/app/components/Selector";
import BorderedContainer from "@/app/components/BorderedContainer";
import SearchBar from "./SearchBar";
import RoundedButton from "@/app/components/RoundedButton";

const options = [
  ["Home", "/home"],
  ["Episodes", "/episodes"],
  ["Info", "/info"],
  ["Music", "music"],
  ["Cast", "/cast"],
  ["Gallery", "/gallery"],
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  const handleClickOpenMenu = () => {
    const footer = footerRef.current!;

    footer.scrollLeft = window.innerWidth;
  };

  const handleClickCloseMenu = () => {
    const footer = footerRef.current!;

    footer.scrollLeft = 0;
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="flex justify-between items-center w-full px-2 flex-grow-0 flex-shrink-0">
        <SearchBar />
        <RoundedButton onClick={handleClickOpenMenu}>
          <img src="/menu.svg" alt="Open menu" />
        </RoundedButton>
      </div>
      <div className="flex justify-between items-center w-full px-2 flex-grow-0 flex-shrink-0">
        <BorderedContainer className="relative w-3/4">
          <Selector options={options} type="link" />
        </BorderedContainer>
        <RoundedButton onClick={handleClickCloseMenu}>
          <img src="/close.svg" alt="Close menu" />
        </RoundedButton>
      </div>
    </footer>
  );
};

export default Footer;
