import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define challenge-related routes
import challengeActions from "./modules/challenge/challengeActions";

router.get("/api/challenges", challengeActions.browse);
router.get("/api/challenge/:id", challengeActions.read);

// Define account-related routes
import accountActions from "./modules/account/accountActions";

router.get("/api/accounts", accountActions.browse);
router.get("/api/accounts/:id", accountActions.read);
router.put("/api/accounts/:id", accountActions.edit);
router.post("/api/accounts", accountActions.hashPassword, accountActions.add);
router.delete("/api/accounts/:id", accountActions.destroy);

import gameActions from "./modules/game/gameActions";
/* ************************************************************************* */
// Define progress-related routes
import progressActions from "./modules/progress/progressActions";

router.get("/api/progress", progressActions.browse);
router.get("/api/progress/:id", progressActions.read);
router.put("/api/progress/:userId/:roomId/:challengeId", progressActions.edit);
router.get(
  "/api/progress/:userId/:roomId/:challengeId",
  gameActions.getProgressByUserId,
);

/* ************************************************************************* */
// Define room-related routes
import roomActions from "./modules/room/roomActions";

router.get("/api/room/:id", roomActions.read);

/* ************************************************************************* */
// Define login-related routes
import loginActions from "./modules/login/loginActions";

router.post("/api/login", loginActions.login);

export default router;
