import React from 'react';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';

const Header = () => {
	return (
		<header className="fixed w-full top-0 left-0">
			<div className="container flex items-center justify-between py-8 lg:border-bottom border-white/20">
				<Logo />
				<Navbar />
				<Cart />
			</div>
		</header>
	);
};

export default Header;
