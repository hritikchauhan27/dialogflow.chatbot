const dialogflow = require('dialogflow');
const config = require("../config/devkey");
const projectId = config.googleProjectId;
const sessionID = config.dialogFlowSessionID;
const axios = require('axios');
const customSearchApiKey = config.customApiKey;
const customSearchEngineId = config.customApiEngine;

const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });

const textQuery = async (userText, userId) => {
  const sessionPath = sessionClient.sessionPath(
    projectId,
    sessionID + userId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userText,
        languageCode: config.dialogFlowSessionLanguageCode
      },
    },
  }

  try {
    const responses = await sessionClient.detectIntent(request);
    console.log(responses);
    return responses[0].queryResult;
  } catch (error) {
    console.error('Dialogflow error:', error);
    return error;

  }
}



const searchGoogle = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: customSearchApiKey,
        cx: customSearchEngineId,
        q: query,
      },
    });

    if (response.data.items && response.data.items.length > 0) {
      const topResult = response.data.items[0];
      console.log(topResult.link);
      return topResult.link;
    } else {
      return "No search results found on google";
    }
  } catch (error) {
    console.error('Google search error:', error);
    return error;
  }
};

module.exports = { textQuery, searchGoogle }
