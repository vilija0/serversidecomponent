
import Form from "./Form"

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, { cache: 'no-cache' })


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function page() {

  const postServer = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24 bg-slate-700">
      <h1 className="text-2xl font-bold my-5">Add some title </h1>

      <Form postServer={postServer} />

    </main>
  )
}
