import {PropsWithChildren} from "react";
import {Link, usePage} from "@inertiajs/react";
import {VerticalStack} from "./VerticalStack.tsx";
import {PageProps} from "../../types";

export const AppLayout = ({children}: PropsWithChildren) => {
    const {authRoutes, user} = usePage<PageProps>().props

    return (
        <VerticalStack>
            <nav className={'flex justify-between p-4'}>
                <p><Link href={'/'}>Inventory</Link></p>
                <div>
                    {user !== null && <p><Link href={authRoutes.logout}>Log out</Link></p>}
                </div>
            </nav>
            {children}
        </VerticalStack>
    )
}
