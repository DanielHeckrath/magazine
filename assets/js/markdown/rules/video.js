import React from 'react';

import reactElement from '../utils/reactElement';
import TYPE_SYMBOL from '../utils/TypeSymbol';
import sanitizeUrl from '../utils/sanitizeUrl';

const LINK_INSIDE = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*";
const LINK_HREF_AND_TITLE =
		"\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";

		const UNESCAPE_URL_R = /\\([^0-9A-Za-z\s])/g;

		const unescapeUrl = function(rawUrlString) {
	return rawUrlString.replace(UNESCAPE_URL_R, "$1");
};
		
const htmlTag = function(tagName, content, attributes, isClosed) {
    attributes = attributes || {};
    isClosed = typeof isClosed !== 'undefined' ? isClosed : true;

    let attributeString = "";
    for (const attr in attributes) {
        // Removes falsey attributes
        if (Object.prototype.hasOwnProperty.call(attributes, attr) &&
                attributes[attr]) {
            attributeString += " " + attr + '="' + attributes[attr] + '"';
        }
    }

    const unclosedTag = "<" + tagName + attributeString + ">";

    if (isClosed) {
        return unclosedTag + content + "</" + tagName + ">";
    } else {
        return unclosedTag;
    }
};

const inlineRegex = function(regex) {
    const match = function(source, state) {
        if (state.inline) {
            return regex.exec(source);
        } else {
            return null;
        }
    };
    match.regex = regex;
    return match;
};

export default function createVideoRule(props) {
	return {
		match: function(source) {
            return /^__([\s\S]+?)__(?!_)/.exec(source);
        },
		parse: function(capture, parse, state) {
			return {
				content: unescapeUrl(capture[1]),
			};
		},
		react: function(node, output, state) {
			return reactElement({
				ref: null,
				type: 'div',
				key: state.key,
				props: {
					children: [
						<span key={state.key}>{sanitizeUrl(node.content)}</span>,
					],
				},
				$$typeof: TYPE_SYMBOL,
				_store: null,
			});
		},
		html: function(node, output, state) {
			const content = [
				htmlTag('span', sanitizeUrl(node.content)),
			];
	
			return htmlTag('div', content.join(''));
		}
	};
}