import {PropsWithChildren} from "react";

export const PageTitle = ({children}: PropsWithChildren) => {
    return (
        <h1 className={'text-4xl font-black text-slate-50'}>{children}</h1>
    )
}
