console.log('Before');

const promise1 = getUser(1)


const promise2 = getCommits(repos[0])


const promise3 =  console.log('Commits', commits)

// Promise-based approach

promise1
    .then(user => getRepositories(user.gitHubUsername))

promise2
    .then(repos => getCommits(repos[0]))

promise3
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

Promise.all([p1, p2])

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}