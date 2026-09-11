/** @type {import('../types.d.ts').LanguageProto<'rql'>} */
export default {
	id: 'rql',
	grammar: {
		'comment': [
			{
				pattern: /\/\/.*/,
			},
			{
				pattern: /\/\*[\s\S]*?\*\//,
				greedy: true,
			},
		],
		'string': {
			pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`/,
			greedy: true,
		},
		'function': {
			pattern:
				/\b(?:ai\.task|embedding\.(?:f32_i1|f32_i8|for|i1|i8|text|text_i1|text_i8)|vector\.search|boost|circle|contains|disjoint|endsWith|exact|exists|fuzzy|intersects|lucene|moreLikeThis|random|score|search|startsWith|within)\s*(?=\()/i,
		},
		'keyword':
			/\b(?:and|between|by|declare|facet|filter|filter_limit|from|function|group|in|include|index|limit|load|match|not|offset|or|order|select|timeseries|update|where|with)\b/i,
		'order-by-option':
			/\b(?:asc|ascending|desc|descending)\b/i,
		'nulls-order':
			/\bnulls\s+(?:first|last)\b/i,
		'type-cast':
			/\b(?:alphaNumeric|double|long|string)\b/i,
		'boolean': /\b(?:false|null|true)\b/i,
		'special-token': /@(?:all_docs|metadata)\b/,
		'number': /\b\d+(?:\.\d+)?\b/,
		'operator': /[<>=!]+|&&|\|\|/,
		'punctuation': /[{}[\];(),.:]/,
	},
};
