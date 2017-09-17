import SimpleMarkdown from 'simple-markdown';

export default function createParser(rules) {
	const parser = SimpleMarkdown.parserFor(rules);
	
	return function(source) {
		return parser(source + "\n\n", {
			inline: false
		});
	};
}