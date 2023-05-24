const {readFileSync, writeFileSync} = require("fs");
const path = require("path")


/* 
* @desc Get all users data
* @name GET /api/v1/user/
* @access public
*/

const getAllUser = (req, res) => {

    // get users data from json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")))

    res.status(200).json(users);
}

/* 
* @desc create user
* @name POST /api/v1/user/
* @access public
*/

const createUser = (req, res) => {

    // get users data from json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")));

    // get body data
    const {name, skill} = req.body;

    // validation
    if (!name || !skill ){
        res.status(400).json({
            message : "Name & skills are required"
        });
    } else {
        users.push({
            id : Math.floor(Math.random() * 10000000000).toString(),
            name : name,
            skill : skill
        });
        writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(users));
        res.status(201).json({
            message : "User created successfully"
        });
    }
}

/* 
* @desc Get single user
* @name POST /api/v1/user/:id
* @access public
*/

const getSingleUser = (req, res) => {
    
    // get users data from json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")));

    const singleUser = users.find(data => data.id == req.params.id)

    if(singleUser){
        res.status(200).json(singleUser);
    } else {
        res.status(404).json({
            message : "singleUser data not found"
        })
    }
}

/* 
* @desc Delete user
* @name Delete /api/v1/user/:id
* @access public
*/

const deleteUser = (req, res) => {

    // get users data from json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")));

    if(users.some(data => data.id == req.params.id)) {
        const data = users.filter(data => data.id != req.params.id)
        writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(data));
        
        res.status(200).json({
            message : "User deleted successfully"
        });
    } else {
        res.status(404).json({
            message : "User not found"
        });
    }

}


/* 
* @desc Update user
* @name Put/Patch /api/v1/user/:id
* @access public
*/

const updateUser = (req, res) => {

    // get users data from json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")));

    if(users.some(data => data.id == req.params.id)) {
        
        users[users.findIndex( data => data.id == req.params.id)] = {
            ...users[users.findIndex( data => data.id == req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(users));
        
        res.status(200).json({
            message : "User updated successfully"
        });
    } else {
        res.status(404).json({
            message : "User not found"
        });
    }

}



// export controllers

module.exports = {
    getAllUser,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser
}