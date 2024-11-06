import type {Config} from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages//*.{js,ts,jsx,tsx,mdx}",
		"./src/components//*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				black: 'var(--black)',
				white: 'var(--white)',
				accent: 'var(--accent)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
			},
			fontSize: {
				'10': '.625rem',   // 10px
				'12': '.75rem',    // 12px
				'13': '0.813rem',     // 13px
				'14': '.875rem',    // 14px
				'15': '0.938rem',   // 15px
				'16': '1rem',     // 16px
				'18': '1.125rem',   // 18px
				'20': '1.25rem',    // 20px
				'24': '1.5rem',    // 24px
				'30': '1.875rem',  // 30px
				'36': '2.25rem',   // 36px
				'48': '3rem',      // 48px
				'64': '4rem',      // 64px
			},
			fontWeight: {
				'hairline': '100',
				'extralight': '200',
				'light': '300',
				'book': '400',
				'medium': '500',
				'semibold': '600',
				'bold': '700',
				'extra-bold': '800',
				'black': '900',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;