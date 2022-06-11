var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/phanuwit13/portfolio.git', // Update to point to your repository  
        user: {
            name: 'phanuwit13', // update to use your name
            email: 'big.phanuwit@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)