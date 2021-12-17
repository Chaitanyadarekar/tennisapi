const bcrypt =require ('bcrypt');
const jwt =require ('jsonwebtoken');
const getDbConnection  =require ('../db').getDbConnection;


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

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            isVerified: false,
        });

        const { insertedId } = result;

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