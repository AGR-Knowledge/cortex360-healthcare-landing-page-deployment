"use client";

// form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import validator from "validator";

// lib
import { cn } from "@/lib/utils";

// shadcn components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  className?: string;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  phone: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .refine(validator.isMobilePhone),
  service: z.string().min(1, { message: "This field has to be filled." }),
  message: z.string().min(1, { message: "This field has to be filled." }),
});

const ContactForm = ({ className }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-5", className)}
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
                  className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border border-border focus:border-theme"
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
                  className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border border-border focus:border-theme"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Phone"
                  {...field}
                  className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border border-border focus:border-theme"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full h-[50px] md:h-[60px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border border-border focus:border-theme">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Market Analysis">
                      Market Analysis
                    </SelectItem>
                    <SelectItem value="Product Design">
                      Product Design
                    </SelectItem>
                    <SelectItem value="Product Development">
                      Product Development
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message..."
                  className="resize-none w-full h-[120px] md:h-[200px] py-[18px] px-[16px] md:px-[30px] outline-0 rounded-[10px] border border-border focus:border-theme"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
