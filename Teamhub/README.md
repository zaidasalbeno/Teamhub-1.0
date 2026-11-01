# Teamhub

A small React and Vite app with simple public pages, demo role-based sign-in, and employee tasks.

## Run locally

From the `Teamhub` project folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. You can also check the project with `npm run lint` and create a production build with `npm run build`.

## Where React concepts are used

- **Entry point and providers:** `src/main.jsx` sets up the MUI theme, `BrowserRouter`, and `AuthProvider`.
- **Routes and shared layout:** `src/App.jsx` defines the pages and role-protected dashboard routes; `src/components/Header.jsx` and `Footer.jsx` are shared across pages.
- **Pages:** `src/pages/` contains Home, About, Work, Login, Register, Employer, and Employee screens.
- **Context:** `src/context/AuthContext.jsx` stores the current user and provides register, login, and logout actions.
- **Custom hook:** `src/hooks/useAuth.js` reads the auth context.
- **Protected routes:** `src/components/ProtectedRoute.jsx` sends signed-out users to Login and routes signed-in users to their role dashboard.
- **State and effects:** `src/pages/Employee.jsx` uses state to update task statuses and an effect to persist them in localStorage per employee.
- **Theme and responsive styles:** `src/theme/theme.js` defines the MUI theme; `src/index.css` contains the shared and small-screen layout styles.

Authentication is for local demonstration only. The app stores demo account details and task statuses in browser localStorage; it has no backend.
