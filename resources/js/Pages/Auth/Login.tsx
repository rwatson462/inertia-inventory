import {PageTitle} from "../../components/ui/PageTitle.tsx";
import {VerticalStack} from "../../components/layout/VerticalStack.tsx";
import {Form, usePage} from "@inertiajs/react";
import {PageProps} from "@/types";
import {Input} from "@/components/ui/input.tsx";
import {Field, FieldDescription, FieldLabel} from "@/components/ui/field.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function Page() {
    const {authRoutes} = usePage<PageProps>().props

    return (
        <VerticalStack>
            <PageTitle>Log in</PageTitle>
            <Form action={authRoutes.login} method={'post'} className={'space-y-8'}>
                <Field>
                    <FieldLabel htmlFor={'email'}>Email address</FieldLabel>
                    <Input name={'email'} id={'email'} type={'email'} required/>
                    <FieldDescription>Use the email address you signed up with!</FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor={'password'}>Password</FieldLabel>
                    <Input type={'password'} id={'password'} name={'password'} required/>
                </Field>
                <p>
                    <Button type={'submit'}>Go to dashboard</Button>
                </p>
            </Form>
        </VerticalStack>
    )
}
