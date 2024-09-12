"use client";

import { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import Selector from "./Selector";
import BorderedContainer from "./BorderedContainer";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

const options = ["Home", "Episodes", "Info", "Music", "Cast", "Gallery"];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (toggled: boolean) => {
    const footer = footerRef.current!;

    footer.scrollLeft = toggled ? window.innerWidth * 0.9 : 0;
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="flex my-allow-overflow basis-full justify-between items-center w-full ps-2">
        <SearchBar />
        <Hamburger
          color="#fff"
          toggled={isOpen}
          toggle={setIsOpen}
          onToggle={handleToggle}
        />
      </div>
      <div className="relative flex justify-end pe-2 custom-width flex-grow-0 flex-shrink-0">
        <BorderedContainer className="relative w-full">
          <Selector options={options} type="link" />
        </BorderedContainer>
      </div>
    </footer>
  );
};

export default Footer;
