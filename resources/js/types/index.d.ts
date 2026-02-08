
export interface PageProps extends Record<string,unknown> {
    authRoutes: {
        login: string,
        register: string,
    }
}
