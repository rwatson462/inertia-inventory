import {VerticalStack} from "../components/layout/VerticalStack.tsx";
import {PageTitle} from "../components/ui/PageTitle.tsx";
import {Link, usePage} from "@inertiajs/react";
import {PageProps} from "../types";
import {AppLayout} from "../components/layout/AppLayout.tsx";

interface InventoryItem {
    name: string,
    id: string, // uuid
    created_at: string,
    updated_at: string,
    deleted_at: string | null,
    user_id: number,
}

interface Props {
    items: InventoryItem[],
    links: {
        items: {
            create: string,
        }
    }
}

export default function Page({items, links}: Props) {
    const {user} = usePage<PageProps>().props

    return (
        <AppLayout>
            <VerticalStack>
                <div>
                    <PageTitle>Hello {user!.name} 👋</PageTitle>
                    <p>Dashboard, motherfucker</p>
                </div>
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                    <p><Link href={links.items.create}>Create your first inventory item</Link></p>
                </div>
            </VerticalStack>
        </AppLayout>
    )
}
