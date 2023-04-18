import Head from 'next/head'
import Link from '@/components/Link'
import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Nino Salonen</title>
				<meta name="description" content="Nino Salonen portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="kidebot, kide, bot, nino salonen" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={grotesk.className}>
				<h1>Hi, I'm Nino</h1>
				<p>
					Looking for{' '}
					<Link href="https://github.com/ninosalonen/kidebot" text="Kidebot" />?
				</p>
			</main>
		</>
	)
}
