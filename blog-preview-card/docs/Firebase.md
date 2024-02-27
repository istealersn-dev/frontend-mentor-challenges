# Uploading HTML Files to Firebase for Static Website Hosting

To upload HTML files to Firebase and serve them as a static website, you can use Firebase Hosting. Follow these steps:

## 1. Install Firebase CLI:

Ensure you have the Firebase CLI installed. You can install it globally using npm:

```bash
npm install -g firebase-tools
```

## 2. Log in to Firebase:

Run the following command to log in to your Firebase account:

```bash
firebase login
```

## 3. Initialize Firebase Project:

Navigate to the directory containing your HTML files and run:

```bash
firebase init
```
During initialization, select Firebase Hosting as one of the features.

## 4. Configure Firebase Hosting:

Follow the prompts during the initialization to set up Firebase Hosting. You'll be asked to specify the public directory, which is the directory containing your HTML files. Typically, this is set to "public".

## 5. Deploy to Firebase Hosting:

Once configured, deploy your project to Firebase Hosting using:

```bash
firebase deploy
```
After deploying, Firebase will provide you with a Hosting URL. Your static HTML files are now hosted and accessible through that URL.

## 6. Update Firebase Hosting Config (Optional)
You can configure additional settings for Firebase Hosting in the firebase.json file created in your project directory. For example, you can define rewrites, redirects, or customize headers.

## Additional Notes:

    Ensure your HTML files are present in the specified public directory.
    Firebase Hosting provides free SSL, so your site will be served over HTTPS.

That's it! Your HTML files are now hosted on Firebase Hosting, and you can access them using the provided Hosting URL.