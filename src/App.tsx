import { ThemeProvider } from "@emotion/react";
import { IconoirProvider } from "iconoir-react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./features/admin/components/Layout";
import Dashboard from "./features/admin/routes/Dashboard";
import AnimationDetail from "./features/animations/routes/Detail";
import AnimationList from "./features/animations/routes/List";
import NotFound from "./features/common/routes/404";
import Helpdesk from "./features/common/routes/Helpdesk";
import Home from "./features/common/routes/Home";
import Search from "./features/common/routes/Search";
import UserProfile from "./features/users/routes/Profile";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <IconoirProvider
          iconProps={{
            strokeWidth: 1.5,
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="/animations" element={<AnimationList />} />
              <Route path="/animations/:id" element={<AnimationDetail />} />
              <Route path="/search" element={<Search />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              {/* TODO: 인증 */}
              <Route path="/users/:id" element={<UserProfile />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </IconoirProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
