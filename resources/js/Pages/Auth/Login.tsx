import {PageTitle} from "../../components/ui/PageTitle.tsx";
import {VerticalStack} from "../../components/layout/VerticalStack.tsx";
import {Form, usePage} from "@inertiajs/react";
import {PageProps} from "../../types";

export default function Page() {
    const { authRoutes } = usePage<PageProps>().props

    return (
        <VerticalStack>
            <PageTitle>Log in</PageTitle>
            <Form action={authRoutes.login} method={'post'}>
                <fieldset>
                    <label htmlFor={'email'}>Email address</label>
                    <input type={'email'} id={'email'} name={'email'} required/>
                </fieldset>
                <fieldset>
                    <label htmlFor={'password'}>Password</label>
                    <input type={'password'} id={'password'} name={'password'} required/>
                </fieldset>
                <p>
                    <button type={'submit'}>Go to dashboard</button>
                </p>
            </Form>
        </VerticalStack>
    )
}
