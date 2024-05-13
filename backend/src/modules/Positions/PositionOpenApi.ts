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
 * /api/positions/{id}:
 *   get:
 *     summary: Get position by ID
 *     tags:
 *       - Positions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the position to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Position retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Position"
 *   delete:
 *     summary: Delete position by ID
 *     tags:
 *       - Positions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the position to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Position deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Position"
 *               required: true
 *   put:
 *     summary: Update position details
 *     tags:
 *       - Positions
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the position to update
 *         required: true
 *         schema:
 *           type: string
 *           format: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewPositionSchema"
 *     responses:
 *       "200":
 *         description: Position details updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Position"
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
 *           description: The ID of the position
 *         title:
 *           type: string
 *           description: The title of the position
 *         description:
 *           type: string
 *           description: The description of the position
 *         salary_range_start:
 *           type: integer
 *           description: The start of the salary range for the position
 *         salary_range_end:
 *           type: integer
 *           description: The end of the salary range for the position
 *         is_hiring:
 *           type: boolean
 *           description: Indicates whether the position is currently hiring
 *       required:
 *         - id
 *         - title
 *         - description
 *         - salary_range_start
 *         - salary_range_end
 *         - is_hiring
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
 *         salary_range_start:
 *           type: number
 *         salary_range_end:
 *           type: number
 *       required:
 *         - id
 *         - title
 *         - description
 *         - salary_range_start
 *         - salary_range_end
 *         - is_hiring
 */
