import {VerticalStack} from "../components/layout/VerticalStack.tsx";
import {Link, usePage} from "@inertiajs/react";
import {PageTitle} from "../components/ui/PageTitle.tsx";
import {PageProps} from "../types";
import {AppLayout} from "../components/layout/AppLayout.tsx";

export default function Page() {
    const {authRoutes, user} = usePage<PageProps>().props

    return (
        <AppLayout>
            <VerticalStack>
                <div>
                    <PageTitle>Inventory 📋</PageTitle>
                    <p>A silly experiment with Laravel, Inertia, and React</p>
                </div>
                <div>
                    {user === null
                        ? <p><Link href={authRoutes.login}>Log in here</Link> or <Link href={authRoutes.register}>Create
                            an account to get started</Link></p>
                        : <p><Link href={'/dashboard'}>Go to your dashboard</Link></p>
                    }
                </div>
            </VerticalStack>
        </AppLayout>
    )
}
