import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    // Append the email to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A1", // Appends to the first empty row of the first sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, new Date().toLocaleString()]],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error subscribing to Google Sheets:", error);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
