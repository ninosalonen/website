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
				<h1>
					Hi, I'm Nino!
				</h1>
				<p>
					I'm a software designer trainee at{' '}
					<Link href="https://www.wapice.com/" text="Wapice" />.
					I study at the University of Turku, where I'm currently 
					pursuing an MSc in Information Technology with a major in 
					Software Engineering and a minor in Data Analytics.
				</p>
				<p>
					Feel free to check out my projects on{' '}
					<Link href="https://github.com/ninosalonen/" text="Github" /> and
					connect with me on{' '}
					<Link href="https://linkedin.com/in/nino-salonen" text="LinkedIn" />.
					Looking for{' '}
					<Link href="https://github.com/ninosalonen/kidebot" text="Kidebot" />?
				</p>
			</main>
		</>
	)
}
