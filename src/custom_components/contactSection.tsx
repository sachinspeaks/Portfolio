import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  TwitterIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import Loader from "./loader";
import type { sectionPropType } from "@/types/globalTypes";

const ContactSection: React.FC<sectionPropType> = ({ sectionRef }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.current) {
      toast.warning("retry");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message Sent.");
        },
        (error) => {
          setLoading(false);
          if (error) console.log(error);
          toast.warning("Message not sent. Please try after some time...");
        }
      );
  };

  return (
    <section
      tabIndex={-1}
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-l md:text-xl font-light">
          Have a role suitable for me or just want to connect? Hit me up. I'm
          always excited to discuss new opportunities and connect with people.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12">
          <div className="space-y-8 flex justify-center flex-col">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 ">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    sachin.ec23@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 ">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:hello@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    (+91) 99103XXXXX
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 ">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    New Delhi, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4 ">
                <a
                  href="https://www.linkedin.com/in/sachinnsut/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/geeky_sachin" target="_blank">
                  <TwitterIcon />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs w-full">
            <h3 className="text-2xl font-semibold mb-6">Send a message.</h3>
            <form action="" className="space-y-6" ref={form}>
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-sm mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-sm mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-sm mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant={"outline"}
                className="cursor-pointer bg-primary/50 p-3 rounded-md hover:scale-110 transition-all hover:bg-primary/80 duration-300"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <Loader /> : <Send />}{" "}
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            <Toaster
              richColors
              toastOptions={{
                style: {
                  backgroundColor: "hsl(var(--primary) , 0.5)",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--foreground))",
                  // text,
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
