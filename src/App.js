import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./app/redux/store/store";
import './index.css';
import "tailwindcss/tailwind.css";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};
