var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/sean-cunniffe/svelte-portfolio', // Update to point to your repository
		user: {
			name: 'sean-cunniffe', // update to use your name
			email: 'sean.cunniffe927@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);