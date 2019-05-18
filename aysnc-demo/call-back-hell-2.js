console.log('Before');


const p = getUser(1);
p.then(user => console.log(user));

// getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//         console.log(commits);
//         })
//     });
// console.log('After');

function getUser(id) {
    return new Promise((resolve,reject) => {
        //kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['commit']);
    }, 2000);
}