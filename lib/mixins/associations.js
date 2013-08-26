var _ = require('underscore');

// Associations
//-----------------------------
// Option #1:
//
// users.has({
//   posts: ['posts'],
//   comments: ['comments']
// });

// posts.has({
//   author: 'users',
//   comments: ['comments']
// });

// comments.has({
//   author: 'users',
//   post: 'posts'
// });

// What we want to end up with internally:
//
// var associations = {
//   'users': [
//     {
//       hasMany: 'posts',
//       key: 'author'
//     },
//     {
//       hasMany: 'comments',
//       key: 'author'
//     }
//   ],
//   'posts': [
//     {
//       hasMany: 'comments',
//       key: 'post'
//     },
//     {
//       hasOne: 'users',
//       key: 'id'
//     }
//   ],
//   'comments': {
//     hasOne: 'users',
//     key: 'id'
//   }
// };

// {
//   "title": "The great novel",
//   "author": "1",
//   "body": "Lorem ipsum",
//   "comments": []
// }

module.exports = {
	has: function(name, service) {
		if(!this._associations) {
			this._associations = {};
		}


	},

	get: function(id, params, callback) {

	}
}
