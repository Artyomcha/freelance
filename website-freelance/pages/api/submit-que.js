import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.SPREADSHEET_QUE_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

// Authenticate with Google Sheets
async function authenticate() {
  const auth = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

// Append a new row to the sheet
async function writeToSheet(data) {
  const sheets = await authenticate();

  const range = "Лист1!A:D"; // Update sheet name if it's not "Sheet1"

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [
          [data.firstName, data.lastName, data.email, data.question],
        ],
      },
    });

    console.log("✅ Data written to sheet:", response.data);
  } catch (error) {
    console.error("❌ Error writing to Google Sheets:", error);
    throw error;
  }
}

// API Route Handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, question } = req.body;

    if (!firstName || !lastName || !email || !question) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    try {
      await writeToSheet({ firstName, lastName, email, question });
      res.status(200).json({ result: 'success' });
    } catch (error) {
      res.status(500).json({ result: 'error', message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
