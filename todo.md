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
- [ ] Stringify projects and experiences array to store in user column instead of creating new table. This is not an ideal approach, but it is fine for this project for now.
- [ ] Show real time preview in template as user updates the form.
- [ ] Don't let them submit the form if not signedIn.
- [ ] Use zod and do server side form validations.
- [ ] Show live portfolio page URL on successfully saving the user info.

---

- [ ] Fetch user details from `username` params in "@/app/portfolio/[username]/page.tsx".
- [ ] Pass fetched details in the template component and render UI.

---

- [ ] Create new GitHub oAuth app for production.
- [ ] Use different oAuth credentials based on environment.
- [ ] Add env variables on vercel.
- [ ] Deploy the app to vercel.

## Miscellaneous

- [ ] Buy domain and point the DNS to vercel.
- [ ] Separate the DB for dev and prod. Right now both uses same DB.
- [ ] Custom domain support. (Needs extensive research)
- [ ] Add 3 more template components.
