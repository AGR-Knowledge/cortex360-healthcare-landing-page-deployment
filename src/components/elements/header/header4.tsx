"use client";

import { useEffect, useState } from "react";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import { Button } from "@/components/ui/button";

// context
import { useContact } from "@/context/contact.context";

// components
import Logo from "../common/logo";
import Offcanvas1 from "../offcanvas/offcanvas1";
import Menu3 from "../menu/menu3";

type Props = {
  headerNav: MenuDataType;
};

const Header4 = ({ headerNav }: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const { openContactModal } = useContact();

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <header
      className={cn(
        scroll ? "fixed" : "absolute",
        "top-0 left-0 w-full z-[99] max-w-[1920px] mx-auto px-[15px] lg:px-[30px]"
      )}
    >
      <div className="bg-sec_bg-2 px-[30px] rounded-[0_0_20px_20px]">
        <div className="flex items-center justify-between h-[90px]">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          {/* <div className="hidden xl:flex justify-center flex-1 px-4">
            <Menu3 headerNav={headerNav} />
          </div> */}
          <div className="flex items-center gap-5">
            <Button
              variant="primary3"
              size="sm"
              onClick={openContactModal}
            >
              <span className="btn-span uppercase" data-text="Book a Demo">
                Book a Demo
              </span>
            </Button>
            <div className="flex justify-end xl:hidden">
              <Offcanvas1 headerNav={headerNav} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header4;
