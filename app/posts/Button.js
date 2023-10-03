'use client'

import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'


export const Button = () => {

    const { pending } = useFormStatus()
    return (
        <button
            className="py-4 px-2 my-5 bg-slate-500 rounded-full hover:bg-slate-600"
            type='submit'
            disabled={pending}
        >
            {!pending ? "Add post" : "Adding post..."}
        </button>
    )
}
