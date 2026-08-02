import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Chat from "../pages/Chat";
import Documents from "../pages/Documents";
import ProtectedRoute from "./ProtectedRoute";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Upload from "../pages/Upload";

import { ROUTES } from "../constants/routes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path={ROUTES.LANDING}
          element={<Landing />}
        />

        <Route
          path={ROUTES.LOGIN}
          element={<Login />}
        />

        <Route
          path={ROUTES.REGISTER}
          element={<Register />}
        />

        <Route
            path={ROUTES.DASHBOARD}
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }
        />
        <Route
          path={ROUTES.DOCUMENTS}
          element={
            <ProtectedRoute>
              <Documents />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.CHAT}
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      <Route
          path="/upload"
          element={
              <ProtectedRoute>
                  <Upload/>
              </ProtectedRoute>
          }
      />
      </Routes>
    </BrowserRouter>
  );
}