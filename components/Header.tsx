import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full p-4 shadow-md flex justify-between items-center">
      <Link href="/">
        <a className="text-xl font-bold">PoP! <span className="text-blue-600">ProofOfProfit.com</span></a>
      </Link>
      <nav className="space-x-4">
        <Link href="/reports"><a>Reports</a></Link>
        <Link href="/lab-notes"><a>Lab Notes</a></Link>
        <Link href="/login"><a className="text-blue-600 font-semibold">Login</a></Link>
      </nav>
    </header>
  )
}