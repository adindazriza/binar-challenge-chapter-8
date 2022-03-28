const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * @swagger
 * /api/v1/players:
 *  get:
 *    summary: GET ALL PLAYERS
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: ALL PLAYERS
 */
 playerRouter.get("/", PlayerController.getPlayers);

 /**
 * @swagger
 *  /api/v1/players:
 *   post:
 *    summary: CREATE PLAYER
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: THE USER TO CREATE
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *          properties:
 *            userName:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: PLAYER CREATED    
 */
playerRouter.post("/", PlayerController.createPlayer);


/**
 * @swagger
 * /api/v1/players:
 *  delete:
 *     summary: DELETE PLAYER BY ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *           required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: PLAYER WAS NOT FOUND
 */
 playerRouter.delete("/:id", PlayerController.deletePlayer);
 
 /**
 * @swagger
 * /api/v1/players:
 *   get:
 *     summary: GET PLAYER BY ID
 *     parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: PLAYER BY ID
 */
playerRouter.get("/:id", PlayerController.getPlayerById);

/**
 * @swagger
 *  /api/v1/players:
 *   put:
 *     summary: UPDATE PLAYER DATA BY ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: PLAYER UPDATED
 */
playerRouter.put("/:id", PlayerController.updatePlayer);

/**
 * @swagger
 * /api/v1/players:
 *  post:
 *    summary: UPDATE PLAYER EXPERIENCE BY ID
 *    parameters: 
 *      - in: path
 *        name: id
 *        schema:
 *          type: object
 *          required:
 *            - exp
 *          properties:
 *            exp:
 *              type: number
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: PLAYER UPDATED
 *      
 */
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
