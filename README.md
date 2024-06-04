# 💻 Dönüşüm Logos Modern Web Site

## 🖥️ What is Dönüşüm Logos Web-Script?

Dönüşüm Logos Web-Script is a custom-built, open-source modern website tailored for Dönüşüm Logos. Advanced JavaScript and node.js technologies have been employed in its development. The foundation of the project relies entirely on React.js, Next.js, and TypeScript. Designed to efficiently disseminate events to specific audiences, this website features a streamlined design, allowing for the creation of scheduled or real-time events, providing detailed information to the audience.

## 🛠️ What Technologies Have We Used in the Project?

In order for the project to be comprehensive and fully functional, we haven't limited ourselves to the technologies mentioned above; they primarily constitute the foundation. Below is a list of the technologies we've utilized:

- Clerk
- Next.js
- React.js
- MongoDB
- TypeScript
- JavaScript
- CSS
- HTML
- PostCSS
- Tailwind CSS
- Stripe
- UploadThing
- Zod

You'll find various auxiliary languages and frameworks within the project. While the site currently has no deficiencies, individuals interested in contributing to its enhancement are welcome to do so by reaching out to us via our homepage for further details.

## 🚀 How Do I Run the Project?

To run the project, you can clone it using Git, download it as a zip file, or utilize the code for your own projects. Follow these steps:

1. Navigate to the downloaded project directory and create a file named `.env.local`. This file is hidden.

2. You need to fill in the required information in the `.env.local` file after creating it.

3. Example `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URI=
```

You should input the Clerk public key, Clerk secret key, and MongoDB URL into this file. Otherwise, you won't be able to run or test the site or make edits.

4. After creating the `.env` file, create a Clerk membership and go to the Dashboard. Design a menu according to your preferences and input the secret keys.

5. Then, go to the MongoDB website and create an account. You can utilize free accounts. Input the link you obtain from there into this file.

6. Once you've completed all the steps, you can run the project by typing `npm run dev` in the console.

## Website Screenshots


### Login Screen
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247672377458823248/image.png)

### Register Screen
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247672422300385320/image.png)

### Home Page
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247671113576874086/image.png)

### Home Page 
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247671164533215303/image.png)

### Create Event
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247671226801979402/image.png)

### Create Event
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247671271290962003/image.png)

### Profile
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247671325837754429/image.png)

### Profile
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247671365247701153/image.png)

### Account
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247672259863248978/image.png)

### Security
![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/1245864924572287057/1247672319032164374/image.png)

---

If you have any questions, issues, or if there's any aspect you don't understand regarding the project, feel free to reach out to us. Friendly individuals who identify errors can either rectify them and contact us or wait for us to publish a new version. Most of the sites we deploy are designed for promotional purposes and are intended to function flawlessly. However, we would be delighted to assist you if you encounter any issues.
