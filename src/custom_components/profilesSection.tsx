import { Card, CardContent } from "@/components/ui/card";
import type { ProfilesType } from "@/types/globalTypes";
import { ExternalLink } from "lucide-react";

const profiles: ProfilesType[] = [
  {
    id: 1,
    name: "Leetcode",
    description:
      "Solved 200+ coding problems focusing on data structures and algorithms",
    image: "leetcode",
    link: "https://leetcode.com/u/sachin_codes/",
  },
  {
    id: 2,
    name: "Codeforces",
    description:
      "Competitive programming enthusiast with Pupil rating, participate in weekly contests",
    image: "codeforces",
    link: "https://codeforces.com/profile/Brahmachaari",
  },
  {
    id: 3,
    name: "GeeksForGeeks",
    description:
      "Active contributor and problem solver with a focus on interview preparation",
    image: "gfg",
    link: "https://www.geeksforgeeks.org/profile/sachingaud78",
  },
];

const ProfilesSection: React.FC = () => {
  return (
    <section id="profiles" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          My <span className="text-primary">Profiles</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-l md:text-xl font-light">
          Below are my coding profiles on various Coding Platforms.
        </p>
        <div className="grid grid-cols-1 gap-6">
          {profiles.map((profile) => (
            <Card key={profile.id}>
              <CardContent className="flex items-baseline justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/20 p-2 h-12 w-12">
                    <img
                      src={`/profileicons/${profile.image}.svg`}
                      alt={profile.name}
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{profile.name}</h4>
                    <p> {profile.description}</p>
                  </div>
                </div>
                <div>
                  <a href={profile.link} target="_blank">
                    <ExternalLink />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
