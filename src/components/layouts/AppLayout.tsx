import { Container } from '@mui/material';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

import BottomNav from './BottomNav';

export default function DefaultLayout(props: PropsWithChildren) {
	const { children } = props;

	return (
		<>
			<Head>
				<title>Next Js With Capacitor And Material UI</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Container maxWidth="md">{children}</Container>
			<BottomNav />
		</>
	);
}
