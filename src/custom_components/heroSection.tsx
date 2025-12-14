import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sachin
            </span>
          </h1>
          <p className="text-l md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Full Stack Developer with experience in React, Tailwind,
            Typescript, Node.Js, Python. Apart from this I'm a problem solver
            and an avid learner and a tech enthusiast.{" "}
          </p>
          <div className="opacity-0 animate-fade-in-delay-4">
            <Button
              variant="outline"
              className="border-[1.5] border-border hover:border-primary hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              View My Work
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
