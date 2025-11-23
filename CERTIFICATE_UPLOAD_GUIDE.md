# Certificate Upload Guide

## How to Upload and Display Certificates

There are two ways to add certificates to your portfolio:

### Method 1: Using the Admin Panel (Recommended)

1. **Navigate to the admin page**: Go to `http://localhost:3000/upload-certificate` (or your deployed URL + `/upload-certificate`)

2. **Login with credentials**:
   - Username: `subash`
   - Password: `subash@123`

3. **Fill out the certificate form**:
   - **Certificate Name**: e.g., "AWS Certified Developer"
   - **Company/Organization**: e.g., "Amazon Web Services"
   - **Description**: Brief description of what the certificate is for
   - **Google Drive URL**: Your Google Drive link (see instructions below)
   - **Issue Date**: Month and year (e.g., "2024-01")

4. **Click "Add Certificate"**

> **Note**: This currently logs the data to console. To persist changes, you'll need to manually update the `public/data/certificates.json` file with the logged data.

### Method 2: Manually Edit JSON File

1. **Upload your certificate to Google Drive**:
   - Go to [Google Drive](https://drive.google.com/)
   - Upload your certificate PDF or image
   - Right-click the file → "Get link"
   - Change sharing to "Anyone with the link can view"
   - Copy the link

2. **Extract the FILE_ID from the link**:
   ```
   Original link format:
   https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
   
   Example:
   https://drive.google.com/file/d/1a2B3cD4eF5gH6iJ7kL8mN9oP0/view?usp=sharing
   FILE_ID = 1a2B3cD4eF5gH6iJ7kL8mN9oP0
   ```

3. **Format your Drive URL for embedding**:
   ```
   Use this format for the driveUrl field:
   https://drive.google.com/file/d/FILE_ID/view
   
   For thumbnail (optional):
   https://drive.google.com/uc?export=view&id=FILE_ID
   ```

4. **Edit the certificates.json file**:

   Open `public/data/certificates.json` and add your certificate:

   ```json
   [
     {
       "id": "1",
       "name": "Example Certificate 1",
       "company": "Example Company",
       "description": "Brief description",
       "driveUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view",
       "issueDate": "2024-01",
       "thumbnailUrl": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
     },
     {
       "id": "2",
       "name": "Example Certificate 2",
       "company": "Another Company",
       "description": "Another description",
       "driveUrl": "https://drive.google.com/file/d/ANOTHER_FILE_ID/view",
       "issueDate": "2024-06",
       "thumbnailUrl": "https://drive.google.com/uc?export=view&id=ANOTHER_FILE_ID"
     }
   ]
   ```

5. **Save the file**

6. **Refresh your website** to see the new certificates

## Certificate Display

Certificates will be displayed in a grid layout with:
- Certificate name as the heading
- Company name as a badge
- Issue date (month and year)
- Description text
- "View Certificate" link that opens the Google Drive file

## Troubleshooting

### Certificate not showing up?
- Check that the JSON syntax is correct (no missing commas, brackets, etc.)
- Verify the Google Drive file is set to "Anyone with the link can view"
- Make sure the `id` field is unique for each certificate
- Refresh the page (hard refresh: Ctrl + Shift + R)

### Thumbnail not displaying?
- Try the alternative thumbnail URL format: `https://drive.google.com/uc?export=view&id=FILE_ID`
- Ensure the file is an image format (JPG, PNG) for thumbnails
- You can also use a different image hosting service for thumbnails

### Certificate link not working?
- Verify the sharing settings on Google Drive
- Make sure you copied the FILE_ID correctly
- Test the link in an incognito browser window

## Advanced: Server-Side Persistence

For production use, you may want to implement server-side certificate storage:

1. **Option 1 - Database**: Use a database (MongoDB, PostgreSQL) to store certificate data
2. **Option 2 - CMS**: Use a headless CMS like Sanity or Contentful
3. **Option 3 - GitHub API**: Store certificates in a GitHub repository and fetch via API

This would require backend implementation and is beyond the current scope of the static website.

## Example Certificate Entry

Here's a complete example:

```json
{
  "id": "aws-cert-2024",
  "name": "AWS Certified Solutions Architect",
  "company": "Amazon Web Services",
  "description": "Professional-level certification demonstrating comprehensive knowledge of AWS services and architecture best practices.",
  "driveUrl": "https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567/view",
  "issueDate": "2024-03",
  "thumbnailUrl": "https://drive.google.com/uc?export=view&id=1aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567"
}
```

## Security Notes

⚠️ The current admin panel uses client-side authentication which is **NOT secure** for production:
- Credentials are visible in the source code
- No protection against brute force attacks
- Anyone can bypass by editing JavaScript

For production deployment with sensitive operations:
- Implement server-side authentication (NextAuth.js, Auth0, etc.)
- Use environment variables for credentials
- Add CSRF protection
- Consider rate limiting

---

Need help? Check the main [README.md](../README.md) file or contact via the channels listed in the About section.
