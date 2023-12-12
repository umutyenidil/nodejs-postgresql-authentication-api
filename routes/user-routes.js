import express from 'express';
import bcrypt from 'bcrypt';

import pool from '../db.js';

import {authenticateToken} from "../middlewares/authorization.js";


const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');

        res.status(200).json({
            users: users.rows,
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
})

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await pool.query(
            'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
            [req.body.name, req.body.email, hashedPassword],
        );

        res.status(200).json({
            user: newUser.rows[0],
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});


export {router as userRoutes};