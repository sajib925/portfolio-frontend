import * as React from 'react';
import {type ContactDataType} from "@/components/Contact";


export const EmailTemplate: React.FC<Readonly<ContactDataType>> = ({
                                                                       firstName,

                                                                   }) => {
    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
        </div>

    )

}

