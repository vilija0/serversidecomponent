import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full p-24 bg-slate-700">
            <Link href='/posts' className="text-gray-50">GO TO POST PAGE</Link>
        </main>
    )
}
