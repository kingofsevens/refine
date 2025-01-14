import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import routerProvider, {
    NavigateToResource,
    CatchAllNavigate,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { dataProvider } from "@refinedev/supabase";
import { DashboardOutlined } from "@ant-design/icons";

import "@refinedev/antd/dist/reset.css";

import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import { UserList } from "./pages/user";
import { TaskList, TaskShow, TaskCreate, TaskEdit } from "./pages/task";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <Refine
                dataProvider={dataProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "dashboard",
                        list: "/",
                        meta: {
                            label: "Dashboard",
                            icon: <DashboardOutlined />,
                        },
                    },
                    {
                        name: "users",
                        list: "/users",
                    },
                    {
                        name: "tasks",
                        list: "/tasks",
                        show: "/tasks/show/:id",
                        create: "/tasks/create",
                        edit: "/tasks/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route
                        element={
                            <Authenticated
                                fallback={<CatchAllNavigate to="/login" />}
                            >
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route index element={<Dashboard />} />

                        <Route path="users" element={<UserList />} />

                        <Route path="tasks">
                            <Route index element={<TaskList />} />
                            <Route path="edit/:id" element={<TaskEdit />} />
                            <Route path="create" element={<TaskCreate />} />
                            <Route path="show/:id" element={<TaskShow />} />
                        </Route>
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <NavigateToResource resource="users" />
                            </Authenticated>
                        }
                    >
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
}

export default App;
