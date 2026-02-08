import {VerticalStack} from "../../components/layout/VerticalStack.tsx";
import {PageTitle} from "../../components/ui/PageTitle.tsx";
import {Form} from "@inertiajs/react";
import {AppLayout} from "../../components/layout/AppLayout.tsx";

export default function Page() {
    return (
        <AppLayout>
            <VerticalStack>
                <PageTitle>Add new inventory item</PageTitle>

                <Form method={'post'}>
                    <fieldset>
                        <label htmlFor={'name'}>Item name</label>
                        <input type={'text'} name={'name'} id={'name'} required/>
                    </fieldset>
                    <p>
                        <button type={'submit'}>Add your item</button>
                    </p>
                </Form>
            </VerticalStack>
        </AppLayout>
    )
}
