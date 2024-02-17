import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import questionRoutes from './routes/questionRoutes.js';
import Connection from './database/db.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path'; // Import path module

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const db = process.env.DB_URI;
Connection(db);

// CORS configuration
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,x-auth-token');
    next();
});

// Middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Load Swagger document
let swaggerDocument;
try {
    const swaggerPath = path.join(process.cwd(), 'swagger.yaml'); // Adjust the path if needed
    swaggerDocument = YAML.load(swaggerPath);
} catch (error) {
    console.error('Error loading Swagger document:', error);
    process.exit(1);
}

// Serve Swagger UI
// app.use('/api-docs', swaggerUi.serve);
// app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Serve Swagger document as JSON
app.get('/api-docs', (req, res) => {
    const formattedSwagger = JSON.stringify(swaggerDocument, null, 2); // Indent with 2 spaces
    res.setHeader('Content-Type', 'application/json');
    res.send(formattedSwagger);
});

// Application routes
app.use('/dsa', questionRoutes);

// Redirect root to Swagger documentation
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
