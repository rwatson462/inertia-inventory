import {PropsWithChildren} from "react";

export const VerticalStack = ({children}: PropsWithChildren) => {
    return (
        <div className={'flex flex-col gap-8'}>
            {children}
        </div>
    )
}
