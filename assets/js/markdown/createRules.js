import React from 'react';
import { defaultRules } from 'simple-markdown';

import createVideoRule from './rules/video';
import reactElement from './utils/reactElement';
import TYPE_SYMBOL from './utils/TypeSymbol';
import sanitizeUrl from './utils/sanitizeUrl';

export default function createRules(props) {
	defaultRules.paragraph.react = function(node, output, state) {
		return reactElement({
			ref: null,
			type: 'div',
			key: state.key,
			props: {
				className: props.classes.paragraph,
				children: output(node.content, state)
			},
			$$typeof: TYPE_SYMBOL,
			_store: null,
		});
	};

	defaultRules.link.react = function(node, output, state) {
		return reactElement({
			ref: null,
			type: 'a',
			key: state.key,
			props: {
				className: props.classes.a,
				href: sanitizeUrl(node.target),
				title: node.title,
				children: output(node.content, state)
			},
			$$typeof: TYPE_SYMBOL,
			_store: null,
		});
	};

	defaultRules.heading.react = function(node, output, state) {
		return reactElement({
			ref: null,
			type: 'h' + node.level,
			key: state.key,
			props: {
				className: props.classes['h' + node.level],
				children: output(node.content, state)
			},
			$$typeof: TYPE_SYMBOL,
			_store: null
		});
	};

	defaultRules.list.react = function(node, output, state) {
		var ListWrapper = node.ordered ? 'ol' : 'ul';

		return reactElement({
			ref: null,
			type: ListWrapper,
			key: state.key,
			props: {
				className: props.classes[ListWrapper],
				start: node.start,
				children: node.items.map(function(item, i) {
					return reactElement({
						ref: null,
						type: 'li',
						key: i,
						props: {
							className: props.classes.li,
							children: output(item, state)
						},
						$$typeof: TYPE_SYMBOL,
						_store: null,
					});
				})
			},
			$$typeof: TYPE_SYMBOL,
			_store: null,
		});
	};

	defaultRules.video = createVideoRule(props);
	defaultRules.video.order = defaultRules.image.order;

	console.log(defaultRules);

	return defaultRules;
};