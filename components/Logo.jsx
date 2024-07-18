import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<Link href="/" className="transition-all hover:opacity-80">
			<Image
				src="./assets/shared/desktop/logo.svg"
				alt="Audiophile"
				width={143}
				height={25}
			/>
		</Link>
	);
};

export default Logo;
