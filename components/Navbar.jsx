import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className="md:flex md:items-center md:gap-[34px]">
			<Link href="/" className="nav-link">
				Home
			</Link>
			<Link href="/headphones" className="nav-link">
				Headphones
			</Link>
			<Link href="/speakers" className="nav-link">
				Speakers
			</Link>
			<Link href="/earphones" className="nav-link">
				Earphones
			</Link>
		</div>
	);
};

export default Navbar;
