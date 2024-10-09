import { google } from "googleapis";

export default async function Post({ params }: { params: { id: string } }) {
  // Auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Query
  const id = params.id;
  const range = `Sheet1!A${id}:C${id}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Result
  let title = "";
  let content = "";
  if (response.data.values) {
    [title, content] = response.data.values[0];
  }

  return (
    <article>
      <h1>{title}</h1>
      <div>
        <p>{content}</p>
      </div>
    </article>
  );
}
