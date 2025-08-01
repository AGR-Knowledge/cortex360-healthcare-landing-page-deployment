"use client";

import Image from "next/image";
import Link from "next/link";

// form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// lib
import { cn } from "@/lib/utils";

// shadcn components
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be minimum 8 character" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password must be minimum 8 character" }),
    agree: z.boolean().default(false).optional(),
  })
  .refine(
    (data) => {
      return data.password === data.confirm_password;
    },
    {
      message: "Password do not match",
    }
  );

const Signup = ({ isOpen, close, open }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      confirm_password: "",
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    close();
  }

  return (
    <Dialog onOpenChange={close} open={isOpen} modal>
      <DialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        className="px-[5px] md:px-[25px] pb-[60px] md:pb-[80px] pt-[50px] md:pt-[70px] max-w-[calc(100%-20px)] md:max-w-[550px] max-h-[90vh] border-[0px] !rounded-[30px] bg-white z-[999] [&>button]:border [&>button]:border-border [&>button]:rounded-full [&>button]:p-3 [&>button]:top-2 [&>button]:right-2 [&>button]:text-primary"
      >
        <ScrollArea className="h-[75vh] w-full px-[20px]">
          <DialogHeader>
            <h2 className="text-[30px] text-center text-primary font-colasta font-bold leading-none">
              <span className="font-normal">Start Your Journey</span> with us.
            </h2>
            <div className="flex justify-center pt-[20px] pb-[45px]">
              <Image
                width={45}
                height={45}
                src="/assets/imgs/shape/shape-s-55.png"
                alt="shape image"
              />
            </div>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("space-y-3")}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Type your name"
                          {...field}
                          className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-full border border-border focus:border-theme"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="User name"
                          {...field}
                          className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-full border border-border focus:border-theme"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Type Email"
                          {...field}
                          className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-full border border-border focus:border-theme"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Type Password"
                          {...field}
                          className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-full border border-border focus:border-theme"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          {...field}
                          className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-full border border-border focus:border-theme"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 !mt-5">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to sassly{" "}
                          <Link
                            href="/booking/privacy-policy"
                            onClick={() => close()}
                            className="font-semibold underline"
                          >
                            Terms of Service
                          </Link>
                          .
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  variant="primary"
                  type="submit"
                  className="w-full rounded-full !mt-[42px]"
                >
                  <span className="btn-span" data-text="Register">
                    Register
                  </span>
                </Button>
              </form>
            </Form>
          </div>
          <div className="mt-[15px] text-center">
            <p className="text-[14px]">
              Already have an account?{" "}
              <span
                className="font-semibold cursor-pointer"
                onClick={() => {
                  open();
                  close();
                }}
              >
                Login Here!
              </span>
            </p>
          </div>
          <div className="relative flex mt-[38px] items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-[16px] text-primary font-bold leading-none font-colasta">
              OR
            </span>
            <div className="flex-grow border-t border-border"></div>
          </div>
          <div className="mt-[37px] flex justify-center items-center gap-[10px] ">
            <div>
              <Image
                width={60}
                height={60}
                src="/assets/imgs/icon/icon-apple.png"
                alt="Icon"
              />
            </div>
            <div>
              <Image
                width={60}
                height={60}
                src="/assets/imgs/icon/icon-google.png"
                alt="Icon"
              />
            </div>
            <div>
              <Image
                width={60}
                height={60}
                src="/assets/imgs/icon/icon-x.png"
                alt="Icon"
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
