const express= require("express")
const router = express.Router()

//diğer rota dosyaları içeri aktarıldı
const authRoute = require("./auth.js");
const categoriesRoute=require("./categories.js")
const employeesRoute=require("./employees.js")
const userRoute = require("./users.js");
//Her rotayı ilgiliyol altında kullanma

router.use("/categories",categoriesRoute)
router.use("/employees",employeesRoute)
router.use("/auth", authRoute);
router.use("/users", userRoute)
module.exports=router