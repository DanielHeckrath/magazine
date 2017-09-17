const colorPrimary = '#ffffff';
const colorAccent = '#ffae41';

const defaultPrimaryText = {
	color: colorPrimary,
	fontWeight: 400,
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	lineHeight: 1,
}

const defaultAccentText = {
	color: colorAccent,
	fontWeight: 400,
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	lineHeight: 1,
}

export default {
    paragraph: {
		...defaultPrimaryText,
		fontSize: 16,
		lineHeight: '24px',
		margin: '0 0 1.5em 0',
	},
	a: {
		...defaultAccentText,
		fontSize: 16,
		fontWeight: 500,
		lineHeight: '28px',
		textDecoration: 'none',
		transition: 'color .2s linear, background .2s linear',
		'&:hover': {
			color: 'rgba(255, 174, 65, 0.7)',
			outline: 0,
		},
	},
	h1: {
		...defaultAccentText,
		fontSize: 112,
		fontWeight: 300,
		letterSpacing: '-.04em',
	},
	h2: {
		...defaultAccentText,
		fontSize: 56,
		lineHeight: 1.35,
		letterSpacing: '-.02em',
	},
	h3: {
		...defaultAccentText,
		fontSize: 45,
		lineHeight: '48px',
	},
	h4: {
		...defaultAccentText,
		fontSize: 34,
		lineHeight: '40px',
	},
	h5: {
		...defaultAccentText,
		fontSize: 24,
		lineHeight: '32px',
	},
	h6: {
		...defaultAccentText,
		fontSize: 16,
		lineHeight: '24px',
	},
	ul: {
		listStyle: 'disc',
		padding: 0,
		margin: '0 0 1em 30px',
	},
	ol: {
		listStyle: 'disc',
		padding: 0,
		margin: '0 0 1em 30px',
	},
	li: {
		...defaultPrimaryText,
		fontSize: 14,
		lineHeight: '20px',
		marginBottom: 10,
	}
};