'use strict';

const kebab = function (string) {
	return String(string)
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

module.exports = kebab;