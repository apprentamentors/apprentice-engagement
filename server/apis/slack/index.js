const WebClient = require('@slack/client').WebClient;
const token = process.env.SLACK_API_TOKEN;
const client = new WebClient(token);
const promisify = require('es6-promisify');
const R = require('ramda');
const apprenticeUserNames = require('../../config/apprentice-usernames');

const getUsers = () => new Promise((resolve, reject) => {
    client.users.list((err, res) => {
        err ? reject(err) : resolve(res);
    });
});

const getApprentices = () => getUsers().then((users) =>
    users.members.filter((user) => apprenticeUserNames.includes(user.name))
);




module.exports.getUsers = getUsers;
module.exports.getApprentices = getApprentices;
