const { VK } = require('vk-io');
const { config } = require('../../config');

const sendToVk = message => {
  const admins = config.vkAdmins;
  const vk = new VK({
    token: config.vkToken,
  });
  const { api } = vk;

  vk.updates.hear(/hello/i, context => context.send('World!'));
  vk.updates.start().catch(console.error);

  let len = admins.length;
  while (len--) {
    api.messages.send({
      message: message,
      peer_id: admins[len],
    });
  }
};

module.exports = {
  sendToVk,
};
