import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { sectionPropType } from "@/types/globalTypes";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const AboutMeSection: React.FC<sectionPropType> = ({ sectionRef }) => {
  const scrollToSection = () => {
    if (!sectionRef || !sectionRef.current) return;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="about" className="py-24 px-4 relative" ref={sectionRef}>
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & Tech Enthusiast
            </h3>
            <p className="">
              With about 2 years of experience in full stack development, I
              specialize in creating full-scale, production-ready web
              applications using modern tools and technologies.
            </p>
            <p>
              I'm passionate about problem-solving and learning new technologies
              to keep myself updated in this fast changing tech domain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="border-[1.5] border-border hover:border-primary hover:text-primary transition-colors duration-300 cursor-pointer"
                variant="outline"
                onClick={scrollToSection}
              >
                Get In Touch
              </Button>
              <Button
                className="border-[1.5] border-border hover:border-primary hover:text-primary transition-colors duration-300 cursor-pointer"
                variant="outline"
              >
                Download Resume
              </Button>

              <a href=""></a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">B. Tech. (ECE)</h4>
                    <p>
                      {" "}
                      From Netaji Subhas University of Technology (formerly
                      NSIT), New Delhi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Competitive Programmer
                    </h4>
                    <p>
                      {" "}
                      Solving complex problems on platforms like LeetCode and
                      Codeforces to enhance my algorithmic skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Software Engineer</h4>
                    <p>
                      {" "}
                      I’m currently contributing at a fast-paced startup,
                      working hands-on with the latest technologies alongside an
                      incredibly enthusiastic and driven team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
