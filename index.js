var nouns = require('./nouns.json');
var adjectives = require('./adjectives.json');
var tengahs = require('./tengah.json');

module.exports.generateUsername = function (separator, length) {
	if(separator==undefined)separator="";
	var noun = nouns[Math.floor(Math.random()*nouns.length)];
	var tengah = tengahs[Math.floor(Math.random()*tengahs.length)];
	var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

	var result = noun + separator + tengah + adjective;
	
	if (length) {
		result = result.substring(0, length);
	}
	return result
};
