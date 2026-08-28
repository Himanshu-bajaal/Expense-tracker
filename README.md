# Expense Tracker

A minimal, dark-themed expense tracker built with React. Add expenses, see your running total update live, delete entries, and everything persists automatically — refresh the page and your data is still there.

## Features

- **Add expenses** with description and amount, with input validation
- **Delete expenses** individually
- **Live running total**, calculated automatically (derived state — no manual syncing)
- **Persistent storage** via `localStorage` — your data survives page refreshes
- **Centralized state logic** using `useReducer`
- **Dark theme** with smooth transitions, hover effects, and slide-in animations for new entries

## Tech Stack

- **React** (Vite)
- **Plain CSS** (no framework — custom dark theme with gradients and animations)
- **Browser `localStorage` API** for persistence

## Hooks Used

| Hook | Where | Why |
|---|---|---|
| `useState` | `ExpenseForm.jsx` | Controlled inputs for description, amount, and error message |
| `useReducer` | `App.jsx` | Centralizes all expense state logic (add/delete) in one reducer function |
| `useEffect` | `App.jsx` | Syncs `expenses` state to `localStorage` whenever it changes |

## Project Structure

```
src/
  components/
    ExpenseForm.jsx    # Form with validation, lifts new expense up via props
    ExpenseList.jsx     # Renders expenses with .map(), handles delete
    ExpenseTotal.jsx    # Derived state — calculates total from expenses on every render
  App.jsx                # Owns expenses state (useReducer), passes data/handlers down
  App.css                # Dark theme styling, layout, animations
  main.jsx
```

## How It Works

1. **`App.jsx`** owns the single source of truth: the `expenses` array, managed via `useReducer`.
2. **`ExpenseForm`** collects input, validates it, and calls `onAddExpense` (passed down as a prop) — it never touches state directly.
3. **`ExpenseList`** receives `expenses` as a prop and renders each one via `.map()`. Deleting an item calls `onDeleteExpense(id)`, another prop function from `App`.
4. **`ExpenseTotal`** receives `expenses` and calculates the sum on every render — no separate state needed.
5. A `useEffect` in `App.jsx` writes `expenses` to `localStorage` every time it changes; on load, `useReducer`'s lazy initializer reads it back.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Possible Next Steps

- Edit existing expenses
- Categories and filtering
- Spending chart (e.g. with `recharts`)
- AI-powered spending summary (via a backend proxy — never call AI APIs directly from the frontend)
- Deploy to Vercel/Netlify
