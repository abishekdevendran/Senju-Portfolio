import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/../tailwind.config.js';
import { useMediaQuery } from 'react-responsive';

const fullConfig = resolveConfig(tailwindConfig).theme!.screens!;

export default function useResponsive(keys: 'sm' | 'md' | 'lg' | 'xl' | '2xl') {
	// use useMediaQuery hook to get the current screen size
	const isScreen = useMediaQuery({
		query: `(min-width: ${fullConfig[keys as keyof typeof fullConfig]})`
	});
	// console.log(
	// 	isScreen,
	// 	'for key',
	// 	keys,
	// 	fullConfig[keys as keyof typeof fullConfig]
	// );
	return isScreen;
}
