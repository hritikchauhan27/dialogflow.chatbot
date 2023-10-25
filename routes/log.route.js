// const chatbot = require("../chatbot/text.query")

// module.exports = app =>{
//     app.post('/google',async(req,res)=>{
//         console.log(req.body);
//         userId
//         const text = req.body.queryResult.queryText;
//         console.log(text);
//         if (text.startsWith('Search Google: ')) {
//             const query = text.substring('Search Google: '.length);
//             const resultQuery = await chatbot.textQuery(query, userId);
//             console.log(resultQuery.fulfillmentText);
//             res.send(resultQuery.fulfillmentText);
//         }
    
//     app.post('/chat', async (req, res) => {
//         // console.log(req);
//         console.log(req.body);
//         const {text, userId} = req.body;
//         const resultQuery = await chatbot.textQuery(text,userId)
//         console.log(resultQuery,"------00000000------");
//         res.send(resultQuery.fulfillmentText)
     
//     }
// }
// }