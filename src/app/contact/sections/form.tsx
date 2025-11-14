"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";

function FormSection() {
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
    <section className="max-w-7xl mx-auto w-full md:p-4 p-2 ">
      <div className="grid lg:grid-cols-2 gap-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.5232678204165!2d-95.77275539965129!3d29.559374753287496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86411dcd689f55b7%3A0xf0abd16da7b2e8c0!2s5601%20Avenue%20I%2C%20Rosenberg%2C%20TX%2077471%2C%20USA!5e0!3m2!1sen!2s!4v1763051991374!5m2!1sen!2s"
          loading="lazy"
          className="rounded-lg h-full w-full min-h-[400px]"
        ></iframe>

        <form
          onSubmit={submitHandler}
          className="bg-accent rounded-lg p-4 grid gap-2"
        >
          <Input type="text" name="name" placeholder="Full Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input
            type="number"
            name="number"
            placeholder="Phone Number"
            required
          />
          <Textarea
            required
            name="message"
            placeholder="Message"
            className="resize-none h-60"
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
    </section>
  );
}

export default FormSection;
