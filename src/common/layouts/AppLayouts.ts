import AppLayout from '@/components/layouts/AppLayout';

export const AppLayouts = {
	Default: AppLayout,
} as const;

export type LayoutKeys = keyof typeof AppLayouts;
