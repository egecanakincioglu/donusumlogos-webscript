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
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/1cae30a5-e4ce-4fea-a4e0-4bcda9448a77)

### Register Screen
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/14423f5f-7031-4986-a2b2-8e9fe60376ab)

### Home Page
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/cae1dca6-9af8-473e-b303-4ecc61c8bea0)
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/e3efa53f-fa41-4a62-b8b2-fb655a514171)

### Create Event
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/46de907f-1acd-4833-a2b3-02257e4b8f96)
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/66ea1783-26d9-4001-a021-0498bce94fd2)

### Profile
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/b14f63b3-e539-4cb6-8d65-25efc6d7f068)
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/e278f0ce-1c83-4364-88b2-e87fb25268ea)

### Account
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/cf06c27a-95ac-4c1f-8600-52da9944bc5a)

### Security
![image](https://github.com/egecanakincioglu/donusumlogos-webscript/assets/102412447/939cc951-41ff-4ee5-b389-8ad04669f435)

---

If you have any questions, issues, or if there's any aspect you don't understand regarding the project, feel free to reach out to us. Friendly individuals who identify errors can either rectify them and contact us or wait for us to publish a new version. Most of the sites we deploy are designed for promotional purposes and are intended to function flawlessly. However, we would be delighted to assist you if you encounter any issues.
