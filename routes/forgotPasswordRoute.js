const getDbConnection =require('../db').getDbConnection;
const   uuid =require('uuid').v4;
const  sendEmail  =require('../util/sendEmail');

 const forgotPasswordRoute = {
    path: '/api/forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;
        console.log(email);
        const db = getDbConnection();
        const passwordResetCode = uuid();

        const  result  = await db.collection('users').updateOne({ email }, { $set: { passwordResetCode } });
        console.log(result);

        if (result.modifiedCount > 0) {
            try {
                await sendEmail({
                    to: email,
                    from: 'tctennischarts@gmail.com',
                    subject: 'Password Reset',
                    text: `
                        To reset your password, click this link:
                        ${process.env.FRONTEND_LINK}/reset-password/${passwordResetCode}
                    `
                });
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
        }

        res.sendStatus(200);
    }
}

module.exports=forgotPasswordRoute