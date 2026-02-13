import nodemailer from 'nodemailer';

interface QuoteData {
    fullName: string;
    email?: string;
    phone: string;
    pickupAddress: string;
    destinationAddress: string;
    houseSize: string;
    movingDate: string;
    message?: string;
    serviceType?: string;
    submissionTime: string;
}

export async function sendQuoteEmail(data: QuoteData) {
    const {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_USERNAME,
        SMTP_PASSWORD,
        SMTP_FROM_NAME,
        SMTP_FROM_EMAIL,
        ADMIN_NOTIFICATION_EMAIL,
    } = process.env;

    // Basic validation of env vars
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USERNAME || !SMTP_PASSWORD || !ADMIN_NOTIFICATION_EMAIL) {
        console.error('Missing SMTP configuration');
        throw new Error('Missing SMTP configuration');
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: SMTP_USERNAME,
            pass: SMTP_PASSWORD,
        },
    });

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Moving Quote Request</h2>
      <p>A new quote request has been submitted from the Habesha Movers website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            <a href="tel:${data.phone}" style="text-decoration: none; color: #007bff;">${data.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            ${data.email ? `<a href="mailto:${data.email}" style="text-decoration: none; color: #007bff;">${data.email}</a>` : 'N/A'}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Type:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.serviceType || 'Not specified'}</td>
        </tr>
         <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Moving From:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.pickupAddress}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Moving To:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.destinationAddress}</td>
        </tr>
         <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">House Size:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.houseSize}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Moving Date:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.movingDate}</td>
        </tr>
        ${data.message ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.message}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Submission Time:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.submissionTime}</td>
        </tr>
      </table>

      <p style="margin-top: 20px; color: #666; font-size: 12px;">This is an automated notification from Habesha Movers.</p>
    </div>
  `;

    try {
        const info = await transporter.sendMail({
            from: `"${SMTP_FROM_NAME || 'Habesha Movers'}" <${SMTP_FROM_EMAIL || SMTP_USERNAME}>`,
            to: ADMIN_NOTIFICATION_EMAIL,
            subject: 'New Moving Quote Request – Habesha Movers Website',
            html: htmlContent,
        });
        console.log('Message sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        // Don't throw, just return failure so it doesn't crash the request if email fails
        return { success: false, error: error };
    }
}
