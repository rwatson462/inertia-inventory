import {VerticalStack} from "../components/layout/VerticalStack.tsx";
import {Link, usePage} from "@inertiajs/react";
import {PageTitle} from "../components/ui/PageTitle.tsx";
import {PageProps} from "../types";

export default function Page() {
    const {authRoutes} = usePage<PageProps>().props

    return (
        <VerticalStack>
            <div>
                <PageTitle>Inventory 📋</PageTitle>
                <p>Motherfucker</p>
            </div>
            <div>
                <p><Link href={authRoutes.login}>Log in here</Link> or <Link href={authRoutes.register}>Create an account to get started</Link></p>
            </div>
        </VerticalStack>
    )
}
