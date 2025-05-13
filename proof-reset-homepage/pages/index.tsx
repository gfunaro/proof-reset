import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>PoP! | ProofOfProfit.com</title>
        <meta name="description" content="Vetted reports on side hustles, platforms, and investments." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white text-black">
        <h1 className="text-5xl font-bold mb-6">
          PoP! <span className="text-blue-600">ProofOfProfit.com</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Real-world reports on the platforms, side hustles, and tools that actually generate income.
        </p>
        <Link href="/reports">
          <a className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Browse PoP! Reports
          </a>
        </Link>
      </main>
    </>
  )
}