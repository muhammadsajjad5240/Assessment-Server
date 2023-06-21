/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const _ = require('lodash');
/**
 * Allowed types
 * String, Boolean, Number
 */
const scopes = {
  assignment: {
    maxFileSize: { type: Number, default: 25 },
  },
  authRoles: {},
  authPermissions: {},
  attachment: {},
  auth: {},
  certificate: {},
  chats: {
    welcomeMessage: {
      type: String,
      default:
        "Welcome to our Learning Management System! We're excited to have you here and look forward to helping you achieve your learning goals. Our platform offers a wide range of courses and resources, with user-friendly tools and a supportive community. If you need any assistance, our team is always here to help. Thank you for joining our community!",
    },
  },
  classes: {},
  comments: {},
  courses: {},
  enrollment: {},
  meetings: {},
  quiz: {},
  requests: {},
  slots: {},
  transactions: {},
  classAssignment: {},
  chathead: {},
  chat: {},
  users: {
    outboundEmail: { type: String, default: 'info@teenycoders.com' },
  },
};

// Transform for claim
_.map(scopes, (scopes, module) => {
  // Create verbs as default
  _.map(['post', 'get', 'getAll', 'put', 'patch', 'delete'], (verb) => {
    if (_.isUndefined(scopes[verb])) scopes[verb] = { type: Boolean, default: false };
  });
  _.map(scopes, (setting, scope) => {
    setting.claim = `${module}.${scope}`;
  });
});

module.exports = scopes;
