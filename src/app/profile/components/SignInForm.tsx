"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {UpdateIcon} from '@radix-ui/react-icons';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signInWithEmailAndPassword } from "../actions";
import { useState, useTransition } from "react";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export default function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const [isInputFocus, setIsInputFocus] = useState({
    email: false,
    password: false,
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

   function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(data);
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
              <code className="text-white">Successfully Login!!</code>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`relative font-Marker text-white ${
                  isInputFocus.email ? "top-0 text-xl" : "top-10 text-3xl"
                } transition-all duration-300 left-2`}>Email</FormLabel>
              <FormControl>
                <Input
                  // placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                  onFocus={() => {
                    setIsInputFocus({
                      email: true,
                      password: false,
                    });
                  }}
                  onBlur={() => {
                    setIsInputFocus({
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
              <FormLabel className={`relative font-Marker text-white ${
                  isInputFocus.password ? "top-0 text-xl" : "top-10 text-3xl"
                } transition-all duration-300 left-2`} >Password</FormLabel>
              <FormControl>
                <Input
                  // placeholder="password"
                  {...field}
                  // type="password"
                  onChange={field.onChange}
                  onFocus={() => {
                    setIsInputFocus({
                      email: true,
                      password: true,
                    });
                  }}
                  // onBlur={() => {
                  //   setIsInputFocus({
                  //     email: true,
                  //     password: false,
                  //   });
                  // }}
                  className="focus:outline-none focus-visible:ring-0 border-b-2 border-white focus:border-b-4 focus:border-glow"
               
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full flex gap-2 bg-white text-black font-Marker rounded-full p-6 text-3xl hover:bg-glow ">
          Let's have more Fun!!
          <UpdateIcon className={cn("animate-spin",{"hidden":!isPending})} />
        </Button>
      </form>
    </Form>
  );
}
