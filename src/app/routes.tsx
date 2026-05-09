import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NewStudentPage } from "./pages/NewStudentPage";
import { StudentsPage } from "./pages/StudentsPage";
import { CheckInsPage } from "./pages/CheckInsPage";
import { ReceptionPage } from "./pages/ReceptionPage";
import { ConfiguracoesPage } from "./pages/ConfiguracoesPage";
import { RootLayout } from "./layouts/RootLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
      {
        Component: ProtectedRoute,
        children: [
          { path: "dashboard", Component: DashboardPage },
          { path: "dashboard/alunos", Component: StudentsPage },
          { path: "dashboard/alunos/novo", Component: NewStudentPage },
          { path: "dashboard/checkins", Component: CheckInsPage },
          { path: "dashboard/recepcao", Component: ReceptionPage },
          { path: "dashboard/config", Component: ConfiguracoesPage },
          { path: "dashboard/*", Component: DashboardPage },
        ],
      },
      { path: "*", Component: () => <div>404 - Página não encontrada</div> },
    ],
  },
]);