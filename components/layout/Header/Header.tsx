'use client';

import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

function Header() {
	return (
		<header className='flex justify-center items-center mx-auto px-2 rounded-md'>
			<h1>我是头部</h1>
			<div className='flex w-full max-w-xs flex-col gap-2'>
				<ThemeSwitcher />
			</div>
		</header>
	);
}

export default Header;
