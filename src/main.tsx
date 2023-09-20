import "./index.css";
import App from "./App.tsx";
import AuthProvider from "./contexts/auth/AuthContext.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <BrowserRouter>
      <ThemeProvider>
         <AuthProvider>
            <App />
         </AuthProvider>
      </ThemeProvider>
   </BrowserRouter>
);
