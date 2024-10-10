import { google } from "googleapis";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Toggle } from "@/components/ui/toggle";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  MagnifyingGlassIcon,
  MixerVerticalIcon,
  AvatarIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default async function TribusHome() {
  interface Tribe {
    name: string;
    projectName: string;
    members: string;
    room: string;
    videoUrl: string;
    repoUrl: string;
    readme: string;
    stack: string;
  }

  // Auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const tribes: Tribe[] = [];

  const projectsQueried = 10;
  const startingRow = 3;

  // Query
  for (let i = startingRow; i < startingRow + projectsQueried; i++) {
    const range = `Sheet1!B${i}:I${i}`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });
    if (response.data.values) {
      tribes.push({
        name: response.data.values[0][0],
        projectName: response.data.values[0][1],
        members: response.data.values[0][2],
        room: response.data.values[0][3],
        videoUrl: response.data.values[0][4],
        repoUrl: response.data.values[0][5],
        readme: response.data.values[0][6],
        stack: response.data.values[0][7],
      });
      continue;
    }
    break;
  }

  let key = 0;
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold">
        Tribus de <span className="font-mono">SISCOx256</span>
      </h1>
      <div className="flex min-w-96 flex-row">
        <Button variant="outline">
          <MagnifyingGlassIcon className="size-4" />
        </Button>
        <Input />
        <Toggle>
          <MixerVerticalIcon className="size-4" />
        </Toggle>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Sin filtro</SelectItem>
            <SelectItem value="room">Salón</SelectItem>
            <SelectItem value="career">Carrera</SelectItem>
            <SelectItem value="tech">Tecnología</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <main className="flex flex-col items-center gap-8">
        <section className="flex flex-col gap-6">
          {tribes.map((tribe) => {
            return (
              <Card key={key++}>
                <CardHeader>
                  <CardTitle>{tribe.projectName}</CardTitle>
                  <CardDescription>
                    {tribe.name} | {tribe.room}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{tribe.readme}</p>
                </CardContent>
                <CardFooter className="h-20">
                  <div className="flex h-9 items-center space-x-4">
                    <Link href={tribe.repoUrl}>
                      <GitHubLogoIcon className="size-7" />
                    </Link>
                    <Separator orientation="vertical" />
                    <div className="flex flex-wrap items-center space-x-4">
                      {/* TODO: create user table with corresponding info */}
                      {tribe.members.split(";").map((member) => {
                        return (
                          <Link href={member} key={key++}>
                            <Avatar className="size-7">
                              <AvatarImage src={member} />
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
            );
          })}
        </section>
      </main>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
