// const db = require('../app');

// exports.getEvent = (req, res) => {
//     res.send('working1');
// }

// exports.postEvent = async (req, res) => {
//     const data = req.body;
//     try {
//         const createdUser = await db.db.collection("events").insertOne(data);
//         res.status(200).json({
//             data: createdUser
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// } 