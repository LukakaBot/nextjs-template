'use client';

import { useEffect } from 'react';

function Home() {
	console.log('home');
	console.log(process.env);
	useEffect(() => {
		window.$bucket?.set('test', 'test');
		window.$bucket?.set('token', 'token');
	}, []);

	return (
		<>
			<h1>我是首页</h1>
		</>
	);
}

export default Home;
