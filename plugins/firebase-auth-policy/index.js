module.exports = function (gateway) {
    const policy = require('./policy.js');
    gateway.policies.add('firebase-auth-policy', policy());
};