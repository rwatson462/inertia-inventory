import {VerticalStack} from "../../components/layout/VerticalStack.tsx";
import {PageTitle} from "../../components/ui/PageTitle.tsx";
import {AppLayout} from "../../components/layout/AppLayout.tsx";

interface Props {
    item: {
        name: string,
    }
}

export default function Page({item}: Props) {
    return (
        <AppLayout>
            <VerticalStack>
                <PageTitle>Your inventory item</PageTitle>

                <div>
                    <p>Name: {item.name}</p>
                </div>
            </VerticalStack>
        </AppLayout>
    )
}
