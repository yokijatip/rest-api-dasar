const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.status(200).json({
            message: "GET Users Success",
            code: 200,
            // bisa di destructuring
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            message: "Server Error, HAMPURAAAAAAAA",
            code: 500,
            serverMessage: err
        })
    }
};

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUser(body)
        res.status(201).json({
            message: "CREATE Users Success",
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error, HAMPURAAAAAAAA",
            code: 500,
            serverMessage: error
        });
    }

};

const updateUser = async (req, res) => {
    // Destructuring req.body
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, id)
        res.status(200).json({
            message: "UPDATE Users Success",
            code: 200,
            data: {
                id: id,
                // Bodynya di spread biar muncul semuanya
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error, HAMPURAAAAAAAA",
            code: 500,
            serverMessage: error
        })
    }
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteUser(id)
        res.json({
            message: "DELETE Users Success",
            data: {
                id: id,
            },
        });
    } catch (error) {
        res.json({
            message: "Server Error, HAMPURAAAAAAAA",
            code: 500,
            serverMessage: error
        })
    }


};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};
