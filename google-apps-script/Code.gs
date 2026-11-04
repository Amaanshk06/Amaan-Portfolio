/**
 * =========================================================================
 * GOOGLE APPS SCRIPT FOR AMAAN SHAIKH PORTFOLIO CONTACT FORM
 * Spreadsheet ID: 14LPwWoH6gguwvh6V7ENZyobur_nOyBCRaNPx5KRxqBQ
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. In your Google Sheet, click "Extensions" > "Apps Script".
 * 2. Delete any default code in Code.gs and replace it with this entire script.
 * 3. Select "setupSheet" from the function dropdown at the top and click "Run".
 *    (This will automatically generate all formatted headings, colors & column widths!)
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Set Description: "Portfolio Form Webhook".
 * 7. Set "Execute as": "Me (your email)".
 * 8. Set "Who has access": "Anyone" (CRITICAL: this allows the website to post).
 * 9. Click "Deploy", copy the "Web app URL", and paste it into personalData.ts or your .env.
 */

const SHEET_NAME = "Submissions";
const NOTIFICATION_EMAIL = "amaanshk234@gmail.com"; // Set to your email for instant lead notifications

/**
 * Run this function once from the Apps Script editor to automatically format
 * the sheet with professional brutalist/modern headers and column widths.
 */
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // If the sheet doesn't exist, create it or use the active one
  if (!sheet) {
    sheet = ss.getActiveSheet();
    sheet.setName(SHEET_NAME);
  }

  // Clear existing content if needed
  sheet.clear();

  // Define Headings
  const headers = [
    "Timestamp (IST)",
    "Full Name",
    "Email Address",
    "Requested Service",
    "Estimated Budget",
    "Project Scope & Message",
    "Source Page",
    "Lead Status"
  ];

  // Set Headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Style Header Row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontFamily("Arial");
  headerRange.setFontSize(11);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#eb5424"); // Brand Orange
  headerRange.setFontColor("#ffffff");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 42);

  // Freeze header row
  sheet.setFrozenRows(1);

  // Set optimal column widths
  sheet.setColumnWidth(1, 170); // Timestamp
  sheet.setColumnWidth(2, 180); // Full Name
  sheet.setColumnWidth(3, 230); // Email
  sheet.setColumnWidth(4, 220); // Service
  sheet.setColumnWidth(5, 200); // Budget
  sheet.setColumnWidth(6, 420); // Scope / Message
  sheet.setColumnWidth(7, 140); // Source
  sheet.setColumnWidth(8, 130); // Lead Status

  // Enable text wrapping for the Message column
  sheet.getRange("F:F").setWrap(true);

  Logger.log("✅ Sheet headings and styles created successfully!");
}

/**
 * Handles incoming POST requests from the portfolio contact form.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  
  // Wait up to 30 seconds for concurrent requests to avoid row collisions
  try {
    lock.waitLock(30000);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Server is busy. Please try again."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.getActiveSheet();
    }

    let data = {};

    // Support both JSON payload and URL-encoded form data
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    const name = data.name || "Anonymous";
    const email = data.email || "No Email Provided";
    const service = data.service || "Web & Frontend Architecture";
    const budget = data.budget || "₹8,000 onwards";
    const message = data.message || "No project brief included";
    const source = data.source || "Website Contact Form";
    const status = "New Lead";

    // Formatted IST Timestamp
    const istTime = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "yyyy-MM-dd HH:mm:ss"
    );

    // Append lead row
    sheet.appendRow([
      istTime,
      name,
      email,
      service,
      budget,
      message,
      source,
      status
    ]);

    const lastRow = sheet.getLastRow();
    
    // Style the new data row
    const rowRange = sheet.getRange(lastRow, 1, 1, 8);
    rowRange.setFontFamily("Arial");
    rowRange.setFontSize(10);
    rowRange.setVerticalAlignment("middle");
    
    // Center alignment for metadata columns
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 7).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 8).setHorizontalAlignment("center");
    
    // Subtle alternate row background
    if (lastRow % 2 === 0) {
      rowRange.setBackground("#fcfcfc");
    }

    // Optional Email Alert to Amaan
    if (NOTIFICATION_EMAIL) {
      try {
        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: `⚡ New Project Inquiry from ${name} [${budget}]`,
          htmlBody: `
            <div style="font-family: sans-serif; max-width: 600px; padding: 24px; border: 1px solid #eee; border-radius: 12px;">
              <h2 style="color: #eb5424; margin-top: 0;">⚡ New Client Inquiry</h2>
              <p>You received a new inquiry on your portfolio website:</p>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Client:</td><td style="padding: 8px;">${name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${service}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${budget}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Source:</td><td style="padding: 8px;">${source}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Time:</td><td style="padding: 8px;">${istTime} IST</td></tr>
              </table>
              <div style="background: #f7f7f7; padding: 14px; border-radius: 8px; margin-top: 14px;">
                <strong>Project Scope & Brief:</strong>
                <p style="white-space: pre-wrap; margin: 8px 0 0 0;">${message}</p>
              </div>
            </div>
          `
        });
      } catch (mailErr) {
        Logger.log("Email notification error: " + mailErr.message);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully",
      row: lastRow
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Handles GET requests to verify webhook status
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "Amaan Shaikh Portfolio Webhook is operational.",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
