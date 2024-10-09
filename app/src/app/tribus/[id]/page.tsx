import { google } from "googleapis";

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
    <article>
      <h1>Tribu {tribe.name}</h1>
      <div>
        <p>{tribe.projectName}</p>
        <p>{tribe.members}</p>
        <p>{tribe.room}</p>
        <p>{tribe.videoUrl}</p>
        <p>{tribe.repoUrl}</p>
        <p>{tribe.readme}</p>
        <p>{tribe.stack}</p>
      </div>
    </article>
  );
}
