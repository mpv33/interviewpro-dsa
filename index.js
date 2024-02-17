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
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

let swaggerDocument;
try {
    const currentFileUrl = import.meta.url;
    const currentDir = path.dirname(new URL(currentFileUrl).pathname);
    const swaggerPath = path.join(currentDir, 'swagger.yaml');
    swaggerDocument = YAML.load(swaggerPath);
} catch (error) {
    console.error('Error loading Swagger document:', error);
    process.exit(1);
}

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Link to Swagger documentation at the root route
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/dsa', questionRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
