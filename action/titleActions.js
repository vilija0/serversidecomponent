'use server'

const { default: connectMongo } = require("@/db/connectdb")
const { default: Post } = require("@/models/Post")
const { revalidatePath } = require("next/cache")

export async function addTitleAction(data) {

    const postTitle = data.get('title').toString()

    if (!postTitle) return
    try {
        await connectMongo()
        const post = new Post({ title: postTitle })
        await post.save()
        console.log(postTitle)

    } catch (error) {
        return { message: error }
    }
    revalidatePath("/posts")
}