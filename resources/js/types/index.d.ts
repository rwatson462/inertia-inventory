
export interface User {
    id: number, // auto-incrementing integer
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
}

export interface PageProps extends Record<string,unknown> {
    authRoutes: {
        login: string,
        register: string,
    }
    user: User|null,
}
