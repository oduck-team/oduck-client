import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Outlet } from "react-router-dom";

import { AdminApiProvider } from "../contexts/AdminApiContext";
import { resolver, theme } from "../libs/mantine/theme";

export default function AdminProviders() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Notifications position="top-center" />
      <ModalsProvider>
        <AdminApiProvider>
          <Outlet />
        </AdminApiProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
