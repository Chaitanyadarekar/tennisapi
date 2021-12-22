const {ObjectID}=require('mongodb');
const jwt =require ('jsonwebtoken');
const getDbConnection =require('../db').getDbConnection;

 const verifyEmailRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req.body;
        const db = getDbConnection();
        const result = await db.collection('users').findOne({
            verificationString,
        });

        if (!result) return res.status(401).json({ message: 'The email verification code is incorrect' });

        const { _id: id, email} = result;

        await db.collection('users').updateOne({ _id: ObjectID(id) }, {
            $set: { isVerified: true }
        });

        jwt.sign({ id, email, isVerified: true}, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
            if (err) return res.sendStatus(500);
            res.status(200).json({ token });
        });
    }
}

module.exports=verifyEmailRoute