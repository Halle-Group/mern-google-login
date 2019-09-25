# mern-google-login
Authentication flow for MERN stack application using google OAuth 2.0

## App flow

![Untitled Diagram](https://user-images.githubusercontent.com/29760858/65579674-a4d22c00-df91-11e9-8303-dc97e5bb0dbf.png)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shahzayb/mern-google-login.git

cd mern-google-login

git install
```

### 2. Obtain OAuth 2.0 credentials from the Google API Console.
Visit the [Google API Console](https://console.developers.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application. Don't store your client secret in your React app. You only need client id in your react app to get the authorization grant code. And you should store client secret in node app.

### 3. Add Authorized JavaScript Origins
![image](https://user-images.githubusercontent.com/29760858/65581115-596d4d00-df94-11e9-8976-b1cbcaaffdbd.png)


### 4. Client Side Setup
Store your client id in GoogleLogin's clientId prop

### 5. Server Side Environment Variables Setup

Create config folder in your project's root. And create file in it with the name of 'dev.env' and then add 'CLIENT_ID', 'CLIENT_SECRET', 'JWT_SECRET' AND 'DB_URL' variables in it and their values

### 6. Run 'dev' script
```bash
npm run dev
```
