import { google } from "googleapis";

// Function to get Google Sheets API client
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const sheets = await getSheetsClient();
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

export async function GET() {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    // Read data from the spreadsheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A1:B10", // Read the first 10 rows of columns A and B
    });

    const rows = response.data.values;

    return Response.json({ rows });
  } catch (error) {
    console.error("Error reading from Google Sheets:", error);
    return Response.json({ error: "Failed to read from sheet" }, { status: 500 });
  }
}
