const { Router } = require("express");
const antivirusController = require("./antivirusController");

const router = Router();

// router.get("/:id", antivirusController.antivirus_get);
router.get("/getAll", antivirusController.antivirus_get);
router.post("/addOne", antivirusController.antivirus_post);
// router.put("/:id", antivirusController.antivirus_put);
// router.delete("/delete/:arrayId", antivirusController.antivirus_delete);
// router.put("/update/:arrayId", antivirusController.antivirus_update);
// router.get("/logout", authController.logout_get);

module.exports = router;
