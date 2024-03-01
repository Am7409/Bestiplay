import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  XIcon,
  TelegramIcon,
  TelegramShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  MailruShareButton,
  MailruIcon,
} from "react-share";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const isDesktop = useWindowSize();

  if (isDesktop > 640) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="border-2 border-orange text-orange p-1 rounded-2xl font-Marker text-center">Share</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-orange font-Marker text-2xl">SHARE</DialogTitle>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="border-2 border-orange text-orange p-1 rounded-2xl font-Marker text-center">Share</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-orange font-Marker text-lg">SHARE</DrawerTitle>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    const [copy, setCopy] = useState(false);
    const shareUrl = window.location.toString();
  
    function handleCopy() {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 2000);
      });
    }

    function preventDefaultCopy(e: any) {
        e.preventDefault();
        handleCopy();
      }

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="url" className="text-[#ff6b64]">Copy Link</Label>
        <div className="flex">
        <Input type="text" id="url" defaultValue={shareUrl} />
        <button onClick={(e)=>preventDefaultCopy(e)}>
            {!copy ? (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={30} width={30}><path fill="#ff4d29" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            ):(
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={30} width={30}><path fill="#ff4d29" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            )}
        </button>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username" className="text-[#ff6b64]">Share with Friends</Label>
        <div className="flex justify-between mt-3">
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <FacebookShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>FaceBook</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <TwitterShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>X</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <TelegramShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>Telegram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <WhatsappShareButton
                  url={shareUrl}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <LinkedinShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <MailruShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <MailruIcon size={32} round />
                </MailruShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mail</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <EmailShareButton
                  url={shareUrl}
                  body="body"
                  className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>E-mail</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </form>
  );
}
