export function getQuery(req) {
    const incorrectQuery = req.body.queryResult.queryText;
}



// if (queryResult.intent.displayName === 'Default Fallback Intent') {
    //   const incorrectQuery = req.body.textext;
    //   const fallbackContext = 'fallbackContext'
    //   queryResult.outputContexts = [
    //     {
    //       name: sessionPath.contextPath(projectId, sessionID, fallbackContext),          lifespanCount: 5, 
    //       parameters: {
    //         selectedQuery : incorrectQuery
    //       },
    //     },
    //   ];
    //   queryResult.fulfillmentText = 'This is not available in our end. Do you want to Google it? (Yes/No)';
    // }