import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { LayoutKeys } from '@/common/layouts/AppLayouts';

export type AppPage<P = object, IP = P> = NextPage<P, IP> & {
	Layout?: LayoutKeys;
};

export type AppPropsExtended<P = {}> = {
	err?: NextPageContext['err'];
	Component: AppPage;
} & AppProps<P>;

export type PageProps = {
	dehydratedState?: DehydratedState;
	session: Session;
};
