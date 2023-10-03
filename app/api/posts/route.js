import connectMongo from "@/db/connectdb"
import Post from "@/models/Post"
import { NextResponse } from "next/server"


export async function GET() {
    await connectMongo()
    const postsdb = await Post.find()

    return NextResponse.json(postsdb)
}