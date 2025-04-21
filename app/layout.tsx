import type { Metadata } from 'next';
import Provider from './provider';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
	title: 'Next.js Template',
	description: 'Next.js Template',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body className='min-h-screen'>
				<Provider>
					<Header />
					<main className='dark text-foreground bg-background'>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
