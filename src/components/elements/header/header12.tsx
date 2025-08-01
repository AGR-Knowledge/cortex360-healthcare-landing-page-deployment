"use client";

import { useEffect, useState } from "react";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import { Button } from "@/components/ui/button";

// components
import Logo from "../common/logo";
import Menu1 from "../menu/menu1";
import Offcanvas1 from "../offcanvas/offcanvas1";
import Signin from "../signin";
import Signup from "../signup";

type Props = {
  headerNav: MenuDataType;
  signUpBtnClassName?: string;
  loginBtnClassName?: string;
  children?: React.ReactNode;
};

const Header12 = ({
  headerNav,
  signUpBtnClassName,
  loginBtnClassName,
  children,
}: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog2 = () => {
    setIsOpen2(!isOpen2);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          scroll ? "fixed backdrop-blur-md bg-theme " : "absolute",
          "top-0 left-0 w-full z-[99]"
        )}
      >
        {children}
        <div className="container 2xl:max-w-[1750px]">
          <div className="flex justify-between gap-[50px] lg:gap-[100px] relative h-[90px] items-center">
            <div>
              <Logo light />
            </div>
            <div className="flex-1">
              <div className="hidden xl:flex justify-end items-center">
                <Menu1
                  headerNav={headerNav}
                  navItemClassName="text-white hover:text-white"
                  dropdownClassName="hover:text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-[10px]">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsOpen2(true)}
                className={cn(
                  "bg-transparent hover:bg-transparent hover:text-btn-text",
                  loginBtnClassName
                )}
              >
                <span className="btn-span" data-text="Login">
                  Login
                </span>
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsOpen(true)}
                className={cn(
                  "hidden md:block bg-btn-bg-hover text-btn-text-hover",
                  signUpBtnClassName
                )}
              >
                <span className="btn-span" data-text="Sign up">
                  Sign up
                </span>
              </Button>
              <div className="flex justify-end xl:hidden">
                <Offcanvas1
                  headerNav={headerNav}
                  actionBtnClassName="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Signup isOpen={isOpen} close={closeDialog} open={closeDialog2} />
      <Signin isOpen={isOpen2} close={closeDialog2} open={closeDialog} />
    </>
  );
};

export default Header12;
