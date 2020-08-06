const router = require("express").Router();
const contributorsController = require("../controllers/contributorsController");
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");

// restricting CORS to only specified domain

router.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST", "GET", "PUT");
    return res.status(200).json({});
  }
});

/**
 * Admin API
 */

// users

router.post(
  "/admin/userQuery",
  adminController.mustHaveToken,
  adminController.sendUsers
);

router.put(
  "/admin/approve-single",
  adminController.mustHaveToken,
  adminController.approveSingle
);

router.put(
  "/admin/disapprove-single",
  adminController.mustHaveToken,
  adminController.disapproveSingle
);

/**
 * used "post" just to "securely" send JWT via the "req.body",
 * rather than "req.headers"
 */

router.post(
  "/admin/contributors",
  adminController.mustHaveToken,
  adminController.getAllContributors
);

// notes

router.post(
  "/admin/notes",
  adminController.mustHaveToken,
  adminController.getAllNotes
);

router.post(
  "/admin/notes/create",
  adminController.mustHaveToken,
  adminController.createNote
);

/**
 * Contributors' API
 */

router.post(
  "/contributors/create",
  contributorsController.isContributorAlreadyRegistered,
  contributorsController.create
);
router.get("/contributors", contributorsController.getAll);

module.exports = router;
