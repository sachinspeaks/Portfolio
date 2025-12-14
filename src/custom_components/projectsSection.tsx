import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { ProjectsType } from "@/types/globalTypes";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A full-stack task management application built with React and Node.js. Features include real-time task updates, user authentication, and a clean UI with Tailwind CSS.",
    image: "node",
    demoUrl: "https://task-app-demo.vercel.app",
    githubLink: "https://github.com/sachin/task-management-app",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays real-time weather data using OpenWeather API. Built with React and styled with Tailwind CSS, includes location search and forecast views.",
    image: "webrtc",
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    githubLink: "https://github.com/sachin/weather-dashboard",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-l md:text-xl font-light">
          Here are a few of my recent Projects. I've made them by diving deep in
          the concepts used and made with utmost attention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-0 overflow-hidden gap-0">
              <CardContent className="h-48 p-0 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={`/projecticons/${project.image}.jpg`}
                  alt={`${project.title}`}
                />
              </CardContent>
              <CardFooter className="flex flex-col justify-center p-4 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-medium">{project.title}</span>
                  <p className="">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    className="cursor-pointer bg-primary/20 p-2 rounded hover:text-primary hover:scale-120 flex justify-center content-center transition-all duration-200"
                    target="_blank"
                    href={project.demoUrl}
                  >
                    <ExternalLink />
                  </a>
                  <a
                    className="cursor-pointer bg-primary/20 p-2 rounded hover:text-primary hover:scale-120 flex justify-center content-center transition-all duration-200"
                    target="_blank"
                    href={project.githubLink}
                  >
                    <Github />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
          <a
            href="https://github.com/sachinspeaks"
            target="_blank"
            className="cursor-pointer bg-primary/20 p-3 rounded-lg hover:scale-110 transition-all hover:bg-primary/80 duration-300 flex gap-1 items-center w-fit justify-self-end"
          >
            View My Github <ArrowRight />
          </a>
          <a
            href="https://www.linkedin.com/in/sachinnsut/"
            target="_blank"
            className="cursor-pointer bg-primary/20 p-3 rounded-lg hover:scale-110 transition-all hover:bg-primary/80 duration-300 flex gap-1 items-center w-fit"
          >
            View My LinkedIn <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
