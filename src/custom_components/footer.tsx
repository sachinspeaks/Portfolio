import { ArrowUp, Copyright } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      {" "}
      <a
        href="#hero"
        className="absolute right-4 bottom-6 p-2 hover:bg-primary/50 transition-colors duration-300 bg-primary/20 rounded-full"
      >
        <ArrowUp />
      </a>
      <p className="flex justify-center items-center py-8 text-sm text-muted-foreground px-4 bg-card border-t border-border">
        {" "}
        <Copyright />
        {new Date().getFullYear()} geekysachin.com, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
