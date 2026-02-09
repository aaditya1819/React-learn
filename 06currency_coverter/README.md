# 💱 Currency Converter

A professional, real-time Currency Converter built with **React**, **Vite**, and **Tailwind CSS**. This project demonstrates the usage of **Custom Hooks** for API integration and building reusable UI components.

## 🚀 Features

- **Real-time Exchange Rates**: Fetches live data from external APIs.
- **Custom Hook**: Implemented a specialized `useCurrencyInfo` hook for data fetching and state management.
- **Reusable Components**: Clean and scalable `InputBox` component designed for currency input and selection.
- **Dynamic UI**: Responsive and modern design using Tailwind CSS.
- **State Management**: Efficiently handles from/to currency types and amounts.

## 🛠️ Built With

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [Exchange Rate Host](https://api.exchangerate.host/convert) (or similar)

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (InputBox)
├── hooks/            # Custom hooks (useCurrencyInfo)
├── App.jsx           # Main application logic
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind imports
```

## ⚙️ How to Run

1. **Clone the repo** (if not already done).
2. **Navigate to the directory**:
   ```bash
   cd 06currency_coverter
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🧠 Key Learnings

- Developing and utilizing **Custom Hooks** in React.
- Optimizing API calls using `useEffect`.
- Building highly reusable and configurable components with props.
- Managing complex form states in a React application.
