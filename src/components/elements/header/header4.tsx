"use client";

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
import Menu3 from "../menu/menu3";

type Props = {
  headerNav: MenuDataType;
};

const Header4 = ({ headerNav }: Props) => {
  const { openContactModal } = useContact();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[99] max-w-none lg:max-w-[1920px] lg:mx-auto"
      )}
    >
      <div className="bg-sec_bg-2 px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] rounded-[0_0_20px_20px]">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header4;
