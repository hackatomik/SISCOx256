import { google } from "googleapis";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { VideoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default async function Tribu({ params }: { params: { id: string } }) {
  // Auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Query
  const id = params.id;
  const range = `Sheet1!B${id}:I${id}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Result
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
  const tribe: Tribe = {
    name: "",
    projectName: "",
    members: "",
    room: "",
    videoUrl: "",
    repoUrl: "",
    readme: "",
    stack: "",
  };

  if (response.data.values) {
    [
      tribe.name,
      tribe.projectName,
      tribe.members,
      tribe.room,
      tribe.videoUrl,
      tribe.repoUrl,
      tribe.readme,
      tribe.stack,
    ] = response.data.values[0];
  }

  return (
    <div className="flex min-h-screen flex-col items-center gap-8">
      <div>
        <p>
          <strong>{tribe.name}</strong> presenta:
        </p>
        <h1 className="text-4xl font-bold">{tribe.projectName}</h1>
      </div>
      <section className="flex flex-col items-center gap-8">
        <div>
          <p>
            <strong>Hecho por: </strong>
            {tribe.members}
          </p>
          <p>
            <strong>Salón: </strong>
            {tribe.room}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Video</CardTitle>
              <CardDescription>Elevator Pitch</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Link href={tribe.videoUrl}>
                <VideoIcon className="size-20" />
              </Link>
            </CardContent>
            <CardFooter>
              <p>
                <em>&quot;Slogan&quot;</em>
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Código</CardTitle>
              <CardDescription>
                Repositorio de GitHub y tecnologías
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Link href={tribe.repoUrl}>
                <GitHubLogoIcon className="size-20" />
              </Link>
            </CardContent>
            <CardFooter>
              <p>Tech stack: {tribe.stack}</p>
            </CardFooter>
          </Card>
        </div>
        <article>
          <h2 className="mb-2 text-2xl font-medium">README</h2>
          <p>{tribe.readme}</p>
        </article>
      </section>
    </div>
  );
}
