const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username, 
        password    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
        const response = await Course.find({});
        res.json({
            courses: response
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    // let courses=[]
    // let finalList=[]
    // const username = req.headers.username;
    // const user = await User.findOne({ 
    //     username: username,
    // }).then(async function(value){
    //     courses = await value.purchasedCourses
    // }).then(
    // courses.forEach(courseid => {
    //     Course.findOne({_id:courseid})
    //     .then(function(value) {
    //         if (value) {
    //             finalList.add(value);
    //         }
    //     })
    // }));
    // res.json({
    //     Courses: finalList
    // })

    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router