import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function FormSection() {
  return (
    <section className="max-w-7xl mx-auto w-full md:p-4 p-2 ">
      <div className="grid lg:grid-cols-2 gap-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.807393895317!2d-77.4363021560759!3d37.53907401821019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b11117f91fcc31%3A0xe2b81f398463fef8!2sRSM%20US%20LLP!5e0!3m2!1sen!2s!4v1762015210791!5m2!1sen!2s"
          loading="lazy"
          className="rounded-lg h-full w-full min-h-[400px]"
        ></iframe>

        <form className="bg-accent rounded-lg p-4 grid gap-2">
          <Input type="text" placeholder="Full Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="number" placeholder="Phone Number" required />
          <Textarea
            required
            placeholder="Message"
            className="resize-none h-60"
          ></Textarea>

          <div>
            <button className="px-4 py-2.5 rounded-sm bg-primary text-white font-semibold">
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
