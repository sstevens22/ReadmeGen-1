const axios = require('axios');

const Giit = {
  async getUser(userAnswers) {
    try { let response = await axios
        
        .get(`https://api.github.com/users/${userAnswers.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = Giit;