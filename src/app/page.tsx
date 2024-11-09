import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const SectionTitle = ({ title, delay }: { title: string; delay: number }) => (
  <BlurFade delay={delay}>
    <h2 className="text-xl font-bold">{title}</h2>
  </BlurFade>
);

const SectionContent = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <BlurFade delay={delay}>{children}</BlurFade>
);

const HeroSection = () => (
  <section id="hero">
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div className="gap-2 flex justify-between">
        <div className="flex-col flex flex-1 space-y-1.5">
          <h1>Are you Looking for a developer ?</h1>
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
          />
          <BlurFadeText
            className="max-w-[600px] md:text-xl"
            delay={BLUR_FADE_DELAY}
            text={DATA.description}
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className="size-28 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
      </div>
    </div>
  </section>
);



const AboutSection = () => (
  <section id="about">
    <SectionTitle title="About" delay={BLUR_FADE_DELAY * 3} />
    <SectionContent delay={BLUR_FADE_DELAY * 4}>
      <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        {DATA.summary}
      </Markdown>
    </SectionContent>
  </section>
);

const WorkSection = () => (
  <section id="work">
    <div className="flex min-h-0 flex-col gap-y-3">
      <SectionTitle title="Work Experience" delay={BLUR_FADE_DELAY * 5} />
      {DATA.work.map((work, id) => (
        <SectionContent key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        </SectionContent>
      ))}
    </div>
  </section>
);

const EducationSection = () => (
  <section id="education">
    <div className="flex min-h-0 flex-col gap-y-3">
      <SectionTitle title="Education" delay={BLUR_FADE_DELAY * 7} />
      {DATA.education.map((education, id) => (
        <SectionContent key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
          <ResumeCard
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
          />
        </SectionContent>
      ))}
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills">
    <div className="flex min-h-0 flex-col gap-y-3">
      <SectionTitle title="Skills" delay={BLUR_FADE_DELAY * 9} />
      <div className="flex flex-wrap gap-1">
        {DATA.skills.map((skill, id) => (
          <SectionContent key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <Badge>{skill}</Badge>
          </SectionContent>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects">
    <div className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to complex mobile applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {DATA.projects.map((project, id) => (
          <SectionContent key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              links={project.links}
            />
          </SectionContent>
        ))}
      </div>
    </div>
  </section>
);

const HackathonsSection = () => (
  <section id="hackathons">
    <div className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Hackathons
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              During my time in university, Participated in many hackathons. People of my mind set come together and build incredible things in 2-3 days. Here are few notable ones
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {DATA.hackathons.map((hackathon, id) => (
            <SectionContent key={hackathon.title + hackathon.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
              <HackathonCard
                title={hackathon.title}
                description={hackathon.description}
                location={hackathon.location}
                dates={hackathon.dates}
                image={hackathon.image}
                links={hackathon.links}
              />
            </SectionContent>
          ))}
        </ul>
      </BlurFade>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact">
    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Feel free to reach out through any of the following methods:
          </p>
          <div className="space-y-2">
            {/* Email Link with Icon */}
            <p className="flex items-center justify-center gap-2">
              <i className="fas fa-envelope text-blue-500" aria-hidden="true"></i>
              <span className="font-semibold">Email:</span>{" "}
              <Link href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
                {DATA.contact.email}
              </Link>
            </p>
            {/* Phone Link with Icon */}
            <p className="flex items-center justify-center gap-2">
              <i className="fas fa-phone text-blue-500" aria-hidden="true"></i>
              <span className="font-semibold">Phone:</span>{" "}
              <Link href={`tel:${DATA.contact.tel}`} className="text-blue-500 hover:underline">
                {DATA.contact.tel}
              </Link>
            </p>
          </div>
        </div>
      </BlurFade>
    </div>
  </section>
);


export default function Page() {
  return (
    <main className="space-y-12 w-full px-6 py-12">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <HackathonsSection />
      <ContactSection />
    </main>
  );
}