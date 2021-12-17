const bcrypt =require ('bcrypt');
const jwt =require ('jsonwebtoken');
const  getDbConnection  =require ('../db').getDbConnection;

 const logInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;

        const db = getDbConnection();
        const user = await db.collection('users').findOne({ email });

        if (!user) return res.sendStatus(401);

        const { _id: id, isVerified, passwordHash} = user;

        const isCorrect = await bcrypt.compare(password, passwordHash);

        if (isCorrect) {
            jwt.sign({ id, isVerified, email },
                
                process.env.JWT_SECRET, 
                
                { expiresIn: '2d' }, 
                
                (err, token) => {
                if (err) {
                    res.status(500).json(err);
                }

                res.status(200).json({ token });
            });
        } else {
            res.sendStatus(401);
        }
    },
}
module.exports=logInRoute