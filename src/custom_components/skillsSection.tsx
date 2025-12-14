import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { SkillsType } from "@/types/globalTypes";
import { useState } from "react";

const skills: SkillsType[] = [
  { iconName: "react", name: "React.Js", category: ["Frontend"] },
  { iconName: "typescript", name: "TypeScript", category: ["Frontend"] },
  { iconName: "redux", name: "Redux", category: ["Frontend"] },
  { iconName: "html", name: "HTML/CSS", category: ["Frontend"] },
  {
    iconName: "javascript",
    name: "JavaScript",
    category: ["Frontend", "Programming Languages"],
  },
  { iconName: "node", name: "Node.Js", category: ["Backend"] },
  { iconName: "express", name: "Express.Js", category: ["Backend"] },
  { iconName: "redis", name: "Redis", category: ["Technology", "Backend"] },
  { iconName: "linux", name: "Linux", category: ["Technology"] },
  {
    iconName: "socket",
    name: "Web Sockets",
    category: ["Technology", "Frontend", "Backend"],
  },
  { iconName: "docker", name: "Docker", category: ["Technology", "Tools"] },
  {
    iconName: "rabbitmq",
    name: "Rabbit Mq",
    category: ["Technology", "Backend"],
  },
  { iconName: "git", name: "Git/Github", category: ["Tools"] },
  { iconName: "tailwind", name: "Tailwind", category: ["Frontend"] },
  {
    iconName: "mongodb",
    name: "Mongo DB",
    category: ["Technology", "Backend"],
  },
  {
    iconName: "sql",
    name: "SQL",
    category: ["Technology", "Programming Languages"],
  },
  { iconName: "cpp", name: "C++", category: ["Programming Languages"] },
  {
    iconName: "python",
    name: "Python",
    category: ["Programming Languages", "Backend"],
  },
  { iconName: "network", name: "Computer Networks", category: ["Technology"] },
  { iconName: "webrtc", name: "WebRTC", category: ["Technology"] },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Tools",
  "Technology",
  "Programming Languages",
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "All" || skill.category.includes(activeCategory)
  );
  return (
    <section id="skills" className="py-24 px-4 mx-8 relative bg-secondary/30 ">
      <div className="py-24 px-4 relative bg-secondary/30 w-4/5 mx-auto">
        <h2 className="text-3xl md:4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.name}
              className="bg-card p-3 rounded-lg shadow-xs card-hover"
            >
              <CardContent>
                <div className="grid grid-cols-2 items-center">
                  <h3 className="font-semibold text-lg text-left ml-10">
                    {skill.name}
                  </h3>
                  <div className="p-2 h-12 w-12 rounded-full bg-primary/30 place-self-center">
                    <img
                      src={`skillIcons/${skill.iconName}.svg`}
                      alt="icon"
                      className="self-center"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
