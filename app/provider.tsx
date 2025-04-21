'use client';

import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<HeroUIProvider>
				<ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
			</HeroUIProvider>
		</>
	);
}

export default Providers;
