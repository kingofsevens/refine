import { AuthBindings } from "@refinedev/core";

export const authProvider: AuthBindings = {
    login: async ({ providerName, email }) => {
        if (providerName === "google") {
            window.location.href =
                "https://accounts.google.com/o/oauth2/v2/auth";
            return {
                success: true,
            };
        }

        if (providerName === "github") {
            window.location.href = "https://github.com/login/oauth/authorize";
            return {
                success: true,
            };
        }

        if (email) {
            localStorage.setItem("email", email);
            return {
                success: true,
                redirectTo: "/",
            };
        }

        return {
            success: false,
            error: new Error("Invalid email or password"),
        };
    },
    register: async (params) => {
        if (params.email && params.password) {
            localStorage.setItem("email", params.email);
            return {
                success: true,
                redirectTo: "/",
            };
        }
        return {
            success: false,
            error: new Error("Invalid email or password"),
        };
    },
    updatePassword: async (params) => {
        if (params.newPassword) {
            //we can update password here
            return {
                success: true,
            };
        }
        return {
            success: false,
            error: new Error("Invalid password"),
        };
    },
    forgotPassword: async (params) => {
        if (params.email) {
            //we can send email with reset password link here
            return {
                success: true,
            };
        }
        return {
            success: false,
            error: new Error("Invalid email"),
        };
    },
    logout: async () => {
        localStorage.removeItem("email");
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
    check: async () =>
        localStorage.getItem("email")
            ? {
                  authenticated: true,
              }
            : {
                  authenticated: false,
                  error: new Error("Not authenticated"),
                  logout: true,
                  redirectTo: "/login",
              },
    getPermissions: async () => ["admin"],
    getIdentity: async () => ({
        id: 1,
        name: "Jane Doe",
        avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
    }),
};
