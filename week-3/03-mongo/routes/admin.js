const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db");
const { Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    let username=req.body.username;
    let password=req.body.password;
    await Admin.create({username : username , password: password})
    const responseMessage = 'Admin created successfully';
    const responseData = { message: responseMessage };
    res.status(200).json(responseData);
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    let title=req.body.title;
    let description=req.body.description;
    let price=req.body.price;
    try{
        await Course.create({title : title , description: description, price:price})
    const responseMessage = 'Course created successfully';
    const responseData = { message: responseMessage };
    res.status(200).json(responseData);
    }
    catch{
        console.log("issue at course")
    }

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
    
});

module.exports = router;