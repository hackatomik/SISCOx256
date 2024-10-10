import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

import {
  GitHubLogoIcon,
  AvatarIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  interface Member {
    name: string;
    avatarUrl: string;
    githubUrl: string;
  }

  interface Project {
    title: string;
    tribe: string;
    career: string;
    readme: string;
    repoUrl: string;
    members: Member[];
  }

  const featuredProjects: Project[] = [
    {
      title: "Silver Bridge",
      tribe: "QBits",
      career: "Ingeniería de Sistemas y Computación",
      readme: "Fundación de alfabetización digital para la tercera edad.",
      repoUrl: "https://github.com/quantumquirk31/silverbridge.foundation",
      members: [
        {
          name: "Jhuomar Barría",
          avatarUrl: "https://github.com/quantumquirk31.png",
          githubUrl: "https://github.com/quantumquirk31",
        },
        {
          name: "Emily Morales",
          avatarUrl: "https://github.com/emi0080.png",
          githubUrl: "https://github.com/emi0080",
        },
        {
          name: "Geremi Tejeira",
          avatarUrl: "https:/github.com/aliuh.png",
          githubUrl: "https://github.com/aliuh",
        },
        {
          name: "Yin Ko",
          avatarUrl: "https://github.com/koshibu.png",
          githubUrl: "https://github.com/koshibu",
        },
        {
          name: "Henry Rodríguez",
          avatarUrl: "",
          githubUrl: "",
        },
        {
          name: "Luis Tapia",
          avatarUrl: "https://github.com/tapilew.png",
          githubUrl: "https://github.com/tapilew",
        },
      ],
    },
  ];
  let key = 0;
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div>
        <h1 className="font-mono text-4xl font-bold">SISCOx256</h1>
        <p>Sistemas Colaborativos</p>
      </div>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <section>
          <h2 className="text-2xl font-medium">Proyectos Destacados</h2>
          <Carousel>
            <CarouselContent className="max-w-lg">
              {featuredProjects.map((project) => {
                return (
                  <CarouselItem key={key++}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>
                          {project.tribe} | {project.career}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{project.readme}</p>
                      </CardContent>
                      <CardFooter className="h-20">
                        <div className="flex h-9 items-center space-x-4">
                          <Link href={project.repoUrl}>
                            <GitHubLogoIcon className="size-7" />
                          </Link>
                          <Separator orientation="vertical" />
                          <div className="flex flex-wrap items-center space-x-4">
                            {project.members.map((member) => {
                              return (
                                <Link href={member.githubUrl} key={key++}>
                                  <Avatar className="size-7">
                                    <AvatarImage src={member.avatarUrl} />
                                    <AvatarFallback>
                                      <AvatarIcon className="size-7" />
                                    </AvatarFallback>
                                  </Avatar>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section>
          <h2 className="text-2xl font-medium">Mensajes Recientes</h2>
          <div className="flex flex-col space-y-4">
            {(() => {
              const messages = [];
              for (let i = 0; i < 3; i++) {
                messages.push(
                  <Alert key={key++}>
                    <EnvelopeClosedIcon className="size-4" />
                    <AlertTitle>Título del mensaje</AlertTitle>
                    <AlertDescription>
                      Contenido del mensaje. Probablemente algo que diría
                      Víctor.
                    </AlertDescription>
                  </Alert>,
                );
              }
              return messages;
            })()}
          </div>
        </section>
      </main>
    </div>
  );
}
