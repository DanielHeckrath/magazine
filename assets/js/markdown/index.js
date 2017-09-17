import createRules from './createRules';
import createParser from './createParser';
import createRenderer from './createRenderer';
import styles from './styles';

function createMarkdownEngine(props) {
	const rules = createRules(props);
	const parser = createParser(rules);
	const renderer = createRenderer();
	return { parser, renderer };
}

export { styles, createMarkdownEngine };