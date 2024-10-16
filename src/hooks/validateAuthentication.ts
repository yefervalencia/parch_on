export const validateAuthentication = () => {
    const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "{}") : null;
    const isAuthenticated = user && user.token ? true : false;
    const typeUser: 'admin' | 'super' | 'user' | '' = user ? user.role : '';

    return { isAuthenticated, typeUser };
};
