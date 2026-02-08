import {VerticalStack} from "../../components/layout/VerticalStack.tsx";
import {PageTitle} from "../../components/ui/PageTitle.tsx";
import {Form, usePage} from "@inertiajs/react";
import {PageProps} from "../../types";

export default function Page () {
    const {authRoutes} = usePage<PageProps>().props

    return (
        <VerticalStack>
            <PageTitle>Register</PageTitle>
            <Form action={authRoutes.register} method={'post'}>
                <fieldset>
                    <label htmlFor={'name'}>Your name</label>
                    <input type={'text'} id={'name'} name={'name'} required/>
                </fieldset>
                <fieldset>
                    <label htmlFor={'email'}>Email address</label>
                    <input type={'email'} id={'email'} name={'email'} required/>
                </fieldset>
                <fieldset>
                    <label htmlFor={'password'}>Password</label>
                    <input type={'password'} id={'password'} name={'password'} required/>
                </fieldset>
                <fieldset>
                    <label htmlFor={'password_confirmation'}>Password (confirm)</label>
                    <input type={'password'} id={'password_confirmation'} name={'password_confirmation'} required/>
                </fieldset>
                <p>
                    <button type={'submit'}>Create your account</button>
                </p>
            </Form>
        </VerticalStack>
    )
}
