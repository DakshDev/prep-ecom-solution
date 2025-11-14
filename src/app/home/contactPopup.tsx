"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

export default function ContactButton() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <button onClick={() => setIsShow((prev) => !prev)} className="primaryBtn">
        Contact us
      </button>
      {isShow ? <PopupForm setIsShow={setIsShow} /> : null}
    </div>
  );
}

function PopupForm({
  setIsShow,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      number: form.get("number"),
      message: form.get("message"),
    };

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("✅ Thanks for your mail");
        location.href = "/";
      })
      .catch(() => alert("🟠 try later"));
  };

  return (
    <div
      onClick={() => setIsShow((prev) => !prev)}
      className="fixed left-0 top-0 z-50 h-full w-full flex justify-center items-center overflow-hidden bg-foreground/60 scroll-none"
    >
      <form
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
        className="bg-accent shadow-2xl rounded-lg p-4 grid gap-2 w-xl relative"
      >
        <X
          onClick={() => setIsShow((prev) => !prev)}
          className="p-2 size-4 rounded-sm bg-red-500 hover:bg-red-600 box-content absolute right-1 top-1 "
        />
        <h1 className="text-primary font-bold lg:text-4xl sm:text-2xl text-lg py-4">
          Contact Us
        </h1>
        <Input
          className="border-2 text-black"
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
        <Input
          className="border-2 text-black"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <Input
          className="border-2 text-black"
          type="number"
          name="number"
          placeholder="Phone Number"
          required
        />
        <Textarea
          required
          name="message"
          placeholder="Message"
          className="resize-none h-60 border-2 text-black"
        ></Textarea>

        <div>
          <button
            type="submit"
            className="px-4 py-2.5 rounded-sm bg-primary text-white font-semibold"
          >
            Submit Message
          </button>
        </div>
      </form>
    </div>
  );
}
