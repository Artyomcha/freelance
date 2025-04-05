require('dotenv').config();
const { google } = require('googleapis');
const { JWT } = require('google-auth-library');

// Load the environment variables
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
async function writeToSheet() {
  const sheets = await authenticate();

  const range = "Sheet1!A:D"; // Adjust the range as needed

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: range,
    valueInputOption: 'RAW',
    resource: {
      values: [
        ["John Doe", "+7 123 456 7890", "johndoe@example.com", "Task description here"]
      ]
    },
  });

  console.log("Data successfully written to Google Sheets", response);
}

// Call the function to write to the sheet
writeToSheet().catch(console.error);






