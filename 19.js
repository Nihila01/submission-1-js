function registerUser(users, newUser) {
    const usernameExists = users.some(user => user.username === newUser.username);
    if (!usernameExists) {
        users.push(newUser);
        console.log(`User ${newUser.username} registered successfully.`);
    } else {
        console.log(`Username ${newUser.username} already exists.`);
    }
    return users;
}
const users = [
    { username: 'john'},
];
const newUser = { username: 'john'};
console.log(registerUser(users, newUser));