import {VerticalStack} from "../components/layout/VerticalStack.tsx";
import {PageTitle} from "../components/ui/PageTitle.tsx";
import {Link} from "@inertiajs/react";

interface InventoryItem {
    name: string,
    id: string, // uuid
    created_at: string,
    updated_at: string,
    deleted_at: string|null,
    user_id: number,
}

interface User {
    id: number, // auto-incrementing integer
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
}

interface Props {
    user: User,
    items: InventoryItem[],
    links: {
        items: {
            create: string,
        }
    }
}

export default function Page({user, items, links}: Props) {
    console.log({user, items, links})

    return (
        <VerticalStack>
            <div>
                <PageTitle>Hello {user.name} 👋</PageTitle>
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
    )
}
