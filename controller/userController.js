const User = require('../model/user');
const Address = require('../model/address');


// To user user and adress Please use postman

const registerUser = async (req,res)=>{
    const {name , address} = req.body;

    try{
        const user = new User({name});
        await user.save();

        const userAddress = new Address({ address, userId: user._id});
        await userAddress.save();

        res.status(201).json({message:'User and address stored successfully!'});

    } catch(error) {
        res.status(500).json({error: 'An error occured while saving data'});
    }
};

module.exports =  registerUser ;



