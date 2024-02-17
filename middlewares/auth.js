// fakeAuthMiddleware.js
export const fakeAuthenticateUser = (req, res, next) => {
    // Check for the AUTH_TOKEN environment variable
    const authToken = req.headers['x-auth-token'];

    // Check if authToken exists and matches the AUTH_TOKEN value from environment variable
    if (authToken === process.env.AUTH_TOKEN) {
        // User is authenticated, proceed to the next middleware or route handler
        next();
    } else {
        // User is not authenticated, send 401 Unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
    }
};
