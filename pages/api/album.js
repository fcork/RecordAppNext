import { connectToDatabase } from '../../lib/database'
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getAlbum(req, res);
        }
    }
}

// Getting all posts.
async function getAlbum(req, res) {
  const { id } = req.query
    try {
        let { db } = await connectToDatabase();
        let posts = await db
            .collection('TestCollection')
            .findOne({_id: new ObjectId(id)})
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
