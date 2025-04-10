import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');  // Fix line breaks

// Authenticate with Google Sheets API
async function authenticate() {
  const auth = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  
  const sheets = google.sheets({ version: 'v4', auth });

  return sheets;
}

// Function to write to Google Sheets
async function writeToSheet(data) {
  const sheets = await authenticate();

  const range = "Лист1!A:D";  // Make sure the sheet name is correct

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: 'RAW',
      resource: {
        values: [
          [data.fullName, data.phoneNumber, data.email, data.taskDescription]
        ]
      },
    });

    console.log("Data successfully written to Google Sheets", response.data);
  } catch (error) {
    console.error("Error writing to sheet:", error);
    throw error;  // Rethrow the error so it can be caught in the handler
  }
}

// API Route Handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;  // Extract the data from the request body

    try {
      await writeToSheet(data);  // Pass the data to the function
      res.status(200).json({ message: 'Data successfully submitted!' });
    } catch (error) {
      res.status(500).json({ message: 'Error writing to sheet', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}






