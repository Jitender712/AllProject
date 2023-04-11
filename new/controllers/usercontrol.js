const Detail = require("../model/info");

const all_details = async (req, res) => {

    try {
        const details = await Detail.find();
        res.json(details);
    
    } catch (error) {
        res.json({message :  error});

    }

};
const onterminal = async (req , res) => {
    const user = new Detail({
        Email : "abcasd@gmail.jo",
        Username : "Rohan3234",
        Password : "qwewrtyuiop",
        Name : "Rahul",       
        PhoneNo : 1236547890,
        Gender : "Male"
    });
    try {
        const saveddata = await user.save();
        res.send(saveddata);
        console.log("Id created");
        console.log(saveddata);
    } catch(error){
        res.status(400).send(error);
    }

}

const create = async (req, res) => { 
        const user = new Detail({
            Username : req.body.Username,
            Password : req.body.Password,
            Name : req.body.Name,
            Email : req.body.Email,
            PhoneNo : req.body.PhoneNo,
            Gender : req.body.Gender
        });
        try {
            const saveddata = await user.save();
            res.send(saveddata);
            console.log("Id created");
            console.log(saveddata);
        } catch(error){
            res.status(400).send(error);
        }
    };
module.exports = {
    all_details,
    create,
    onterminal
}
