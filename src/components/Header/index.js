import React from 'react';

import './styles.css';

function Header() {
	return (
		<header className="header">
			<a href="/" className="header__brand">
				Nav
			</a>
			<nav className="header__nav">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Profile</a>
					</li>
					<li>
						<a href="/">Clients</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
