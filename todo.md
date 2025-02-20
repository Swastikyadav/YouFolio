## Project TODO list.

- [x] Initiate a new NextJs project with ShadcnUI.
- [x] Install and setup Prisma ORM.
- [x] Create new postgres DB in vercel.
- [x] Connect DB with the project.

---

- [x] Setup authentication with nextAuth.

---

- [x] Identify all different routes for this app will have + data each one shows.

| route         | data change  |
| ------------- | ------------ |
| "/login"      | none         |
| "/signup"     | none         |
| "/dashboard"  | user details |
| "/[username]" | none         |

- [x] Make 'path helper' functions.
- [x] Create routing folders + their page.tsx
- [x] Identify places where data changes.
  - "/dashboard"
- [x] Make empty server actions for each of those.
- [x] Add comments on what paths need to be 'revalidated' for each server action.

---

- [x] Build home page UI.
- [x] Add signIn callback to redirect after successful login.

---

- [x] Add first reusable template component in "@/components/templates".

---

- [x] Build dashboard page UI.
- [x] Stringify projects and experiences array to store in user column instead of creating new table. This is not an ideal approach, but it is fine for this project for now.
- [x] Show real time preview in template as user updates the form.
- [x] Don't let them submit the form if not signedIn.
- [x] Add skeleton on /dashboard and /portofolio page while data is loading.
- [x] Do server side form validations.
- [x] Review chaching and other optimizations.
- [x] Show live portfolio page URL on successfully saving the user info.

---

- [x] Fetch user details from `username` params in "@/app/portfolio/[username]/page.tsx".
- [x] Pass fetched details in the template component and render UI.

---

- [x] Create new GitHub oAuth app for production.
- [x] Use different oAuth credentials based on environment.
- [x] Run prisma migrations for deployment.
- [x] Add env variables on vercel.
- [x] Deploy the app to vercel. --> https://getyoufolio.vercel.app/

## Miscellaneous

- [ ] Buy domain and point the DNS to vercel.
- [ ] Separate the DB for dev and prod. Right now both uses same DB.
- [ ] Custom domain support. (Needs extensive research)
- [ ] Add 3 more template components.
