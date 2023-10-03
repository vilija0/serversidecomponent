'use client'

import { addTitleAction } from '@/action/titleActions'
import React, { useRef } from 'react'
import { Button } from './Button'

import { experimental_useOptimistic as useOptimistic } from 'react'


const Form = ({ postServer }) => {
    const ref = useRef(null)

    const [optimisticTitle, addOptimisticTitle] = useOptimistic(
        postServer,
        (state, newTitle) => {
            console.log("state", state, "novi naslov", newTitle);
            return [...state, newTitle]
        }
    )

    return (
        <form
            ref={ref}
            action={async (formData) => {
                ref.current?.reset()
                if (!formData.get("title")) return

                addOptimisticTitle({
                    id: Math.round(Math.random() * 1000),
                    title: formData.get("title")
                })
                await addTitleAction(formData)

            }}
            className='flex flex-col w-[300px]'
        >
            <label>Title</label>
            <input className="h-10 rounded-lg my-4" type='text' id='title' name='title'></input>

            <Button />

            <ul className='list-decimal'>
                {optimisticTitle.map((post, index) => {
                    return <li className="text-blue-500" key={index}>{post.title}</li>
                })}
            </ul>


        </form>
    )
}

export default Form