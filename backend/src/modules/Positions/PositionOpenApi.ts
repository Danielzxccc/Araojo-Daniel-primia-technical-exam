/**
 * @openapi
 * /api/positions:
 *   get:
 *     summary: Get positions
 *     tags:
 *       - Positions
 *     parameters:
 *       - in: query
 *         name: is_hiring
 *         schema:
 *           type: string
 *           default: "true"
 *         description: Filter positions by hiring status (optional)
 *     responses:
 *       "200":
 *         description: List of positions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Position"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Position:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         openings:
 *           type: integer
 *         salary_range_start:
 *           type: integer
 *         salary_range_end:
 *           type: integer
 *         is_hiring:
 *           type: boolean
 */

/**
 * @openapi
 * /api/positions:
 *   post:
 *     summary: Create a new position
 *     tags:
 *       - Positions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewPositionSchema"
 *     responses:
 *       "201":
 *         description: Position created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Position"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     NewPositionSchema:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         openings:
 *           type: number
 *         salary_range_start:
 *           type: number
 *         salary_range_end:
 *           type: number
 */
