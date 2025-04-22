interface ContentProps {
	children: React.ReactNode;
}

function Content({ children }: ContentProps) {
	return <main className='dark text-foreground bg-background'>{children}</main>;
}

export default Content;
