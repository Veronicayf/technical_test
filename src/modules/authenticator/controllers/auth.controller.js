const jwt = require('jsonwebtoken');
const { User } = require('../../../db');
const bcrypt = require('bcryptjs');
require('dotenv').config();


const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Registro de usuario
const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear nuevo usuario
        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        // Generar token JWT
        const token = generateToken(newUser);
        res.status(201).json({ token });

    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el registro' });
    }
};

// Inicio de sesión
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar al usuario
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Verificar contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token JWT
        const token = generateToken(user);
        res.status(200).json({ token });

    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
};

module.exports = { register, login };
