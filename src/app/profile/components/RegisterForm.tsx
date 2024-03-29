'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UpdateIcon } from "@radix-ui/react-icons";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signUpWithEmailAndPassword } from "../actions";
import { useState, useTransition } from "react";

const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password is required.",
    }),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
    name: z.string().min(2, {
      message: "User Name is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
    path: ["confirm"],
  });

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [isInputFocus, setIsInputFocus] = useState({
    name: false,
    email: false,
    password: false,
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword(data);
      const { error } = JSON.parse(result);

      if (error?.message) {
        toast({
          variant: "destructive",
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Successfully Registred!!</code>
            </pre>
          ),
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={`relative font-Marker text-white ${
                  isInputFocus.name ? "top-0 text-xl" : "top-10 text-3xl"
                } transition-all duration-300 left-2`}
              >
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  // placeholder="Jack Mittal"
                  {...field}
                  type="text"
                  onChange={field.onChange}
                  onFocus={() => {
                    setIsInputFocus({
                      name: true,
                      email: false,
                      password: false,
                    });
                  }}
                  onBlur={() => {
                    setIsInputFocus({
                      name: false,
                      email: false,
                      password: false,
                    });
                  }}
                  className="focus:outline-none focus-visible:ring-0 border-b-2 border-white focus:border-b-4 focus:border-glow"
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
              <FormLabel
                className={`relative font-Marker text-white ${
                  isInputFocus.email ? "top-0 text-xl" : "top-10 text-3xl"
                } transition-all duration-300 left-2`}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  // placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                  onFocus={() => {
                    setIsInputFocus({
                      name: true,
                      email: true,
                      password: false,
                    });
                  }}
                  onBlur={() => {
                    setIsInputFocus({
                      name: true,
                      email: false,
                      password: false,
                    });
                  }}
                  className="focus:outline-none focus-visible:ring-0 border-b-2 border-white focus:border-b-4 focus:border-glow"
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
              <FormLabel
                className={`relative font-Marker text-white ${
                  isInputFocus.password ? "top-0 text-xl" : "top-10 text-3xl"
                } transition-all duration-300 left-2`}
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  // placeholder="password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                  onFocus={() => {
                    setIsInputFocus({
                      name: true,
                      email: true,
                      password: true,
                    });
                  }}
                  onBlur={() => {
                    setIsInputFocus({
                      name: true,
                      email: true,
                      password: false,
                    });
                  }}
                  className="focus:outline-none focus-visible:ring-0 border-b-2 border-white focus:border-b-4 focus:border-glow"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={`relative font-Marker text-white ${
                  isInputFocus.password ? "top-0 text-xl" : "top-10 text-3xl"
                } transition-all duration-300 left-2`}
              >
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  // placeholder="Confirm Password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                  onFocus={() => {
                    setIsInputFocus({
                      name: true,
                      email: true,
                      password: true,
                    });
                  }}
                  onBlur={() => {
                    setIsInputFocus({
                      name: false,
                      email: false,
                      password: false,
                    });
                  }}
                  className="focus:outline-none focus-visible:ring-0 border-b-2 border-white focus:border-b-4 focus:border-glow"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full flex gap-2 bg-white text-black font-Marker rounded-full p-6 text-3xl hover:bg-glow ">
          Join the Fun!!
          <UpdateIcon className={cn("animate-spin", { hidden: !isPending })} />
        </Button>
      </form>
    </Form>
  );
}
