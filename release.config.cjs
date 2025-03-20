/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: ["main"],
	plugins: [
		"@semantic-release/release-notes-generator",
		"@semantic-release/commit-analyzer",
		"@semantic-release/changelog",
		"@semantic-release/github",
	],
};
