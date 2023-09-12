import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Head from 'next/head';
import * as React from 'react';
import { PropsWithChildren } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppLayouts } from '@/common/layouts/AppLayouts';
import theme from '@/theme';
import createEmotionCache from '@/utils/createEmotionCache';

import { AppPropsExtended, PageProps } from '@/types/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

dayjs.extend(customParseFormat);
dayjs.locale('id');

const FallBackLayout: React.FC<PropsWithChildren> = ({ children }) => (
	<>{children}</>
);

export default function MyApp(props: AppPropsExtended<PageProps>) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles?.remove();
		}
	}, []);

	const layoutKey = Component.Layout;
	const Layout = layoutKey ? AppLayouts[layoutKey] : FallBackLayout;

	// set up query client
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<CacheProvider value={emotionCache}>
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
						/>
					</Head>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ThemeProvider>
				</CacheProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}
