
const signUpRoute=require('./signUpRoute')
const logInRoute=require('./logInRoute')
// const testEmailRoute=require('./testEmailRoute')
const verifyEmailRoute=require('./verifyEmailRoute')
const forgotPasswordRoute=require('./forgotPasswordRoute')
const resetPasswordRoute=require('./resetPasswordRoute')

const routes = [
    signUpRoute,
    logInRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute
];

module.exports=routes
// mongodb+srv://tctennischarts:mongo111db@cluster0.qx7xf.mongodb.net/tctennischartsdb?retryWrites=true&w=majority
// testEmailRoute
