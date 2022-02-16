import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;

		colors: {
			primary: string;
			neutral_00: string;
			neutral_10: string;
			neutral_30: string;
			neutral_50: string;
			neutral_80: string;
			neutral_100: string;
		};
	}
}