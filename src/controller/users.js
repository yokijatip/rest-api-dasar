const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: "GET Users Success",
            code: 200,
            // bisa di destructuring
            data: data,
        });
    } catch (err) {
        res.json({
            message: "Server Error, HAMPURAAAAAAAA",
            code: 500,
            serverMessage: err
        })
    }
};

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: "CREATE Users Success",
        code: 200,
        data: req.body,
    });
};

const updateUser = (req, res) => {
    // Destructuring req.body
    const {id} = req.params;

    console.log("ID: " + id);
    res.json({
        message: "UPDATE Users Success",
        code: 200,
        data: req.body,
    });
};

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message: "DELETE Users Success",
        data: {
            id: id,
        },
    });
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};
