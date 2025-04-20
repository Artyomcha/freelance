import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.SPREADSHEET_HISTORY_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

async function authenticate() {
  const auth = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

async function logToSheet(data) {
  const sheets = await authenticate();
  const range = 'Лист1!A:C'; // Create this sheet or update name if needed

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range,
    valueInputOption: 'RAW',
    resource: {
      values: [[new Date().toISOString(), data.userMessage, data.botResponse]],
    },
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await logToSheet(req.body);
      res.status(200).json({ result: 'success' });
    } catch (error) {
      console.error('Error logging chat:', error);
      res.status(500).json({ result: 'error', message: error.message });
    }
  } else {
    res.status(405).json({ result: 'error', message: 'Method Not Allowed' });
  }
}