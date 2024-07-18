import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
	title: 'Audiophile e-commerce website',
	description: 'Frontend Mentor Project',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={manrope.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
