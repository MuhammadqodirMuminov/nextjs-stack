import ThemeProvider from '@/context/ThemeProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
	title: 'DevFlow',
	description:
		'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more',
	icons: {
		icon: '/assets/images/site-logo.svg',
	},
};

export const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});

export const spaceGrotest = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
	display: 'swap',
	style: 'normal',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: 'primary-gradient',
					footerActionLink: 'primary-text-gradient hover:text-primary-500',
				},
			}}
		>
			<html lang='en'>
				<body className={`${inter.variable} ${spaceGrotest.variable}`}>
					<ThemeProvider>{children}</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
