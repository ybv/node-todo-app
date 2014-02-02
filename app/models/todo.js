var mongose = require('mongose');

module.exports = mongose.model('Todo',{
	text: String,
	done: Boolean
});