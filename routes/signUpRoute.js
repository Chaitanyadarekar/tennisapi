const bcrypt =require ('bcrypt');
const jwt =require ('jsonwebtoken');
const getDbConnection =require('../db').getDbConnection;
const   uuid =require('uuid').v4;
const  sendEmail  =require('../util/sendEmail');


const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {

        const { email, password } = req.body;
        // console.log(req.body);
        // console.log(process.env.JWT_SECRET)
        
        const db = getDbConnection();
        const user = await db.collection('users').findOne({ email });
        // console.log("user ", user)
        if (user) {
            console.log("User Found");
            res.sendStatus(409);
            // return;
        }
        
        const passwordHash = await bcrypt.hash(password, 10);
        // console.log(passwordHash)
        const verificationString = uuid();

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            isVerified: false,
            verificationString,
        });

        const { insertedId } = result;

        try {
            await sendEmail({
                to: email,
                from: 'tctennischarts@gmail.com',
                subject: 'Please verify your email',
                text: `
                    Thanks for signing up! To verify your email, click here:
                    ${process.env.FRONTEND_LINK}/verify-email/${verificationString}
                `,
            });
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

        jwt.sign(
        {
            id: insertedId,
            email,
            isVerified: false,
        },

        process.env.JWT_SECRET
        ,

        {
            expiresIn: '2d',
        },
        (err, token) => {
            if (err) {
                console.log("Token error")
                return res.status(500).send(err);
            }
            res.status(200).json({ token });
        });
    }
}

module.exports=signUpRoute