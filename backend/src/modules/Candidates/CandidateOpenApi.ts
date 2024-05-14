/**
 * @openapi
 * /api/candidates:
 *   post:
 *     summary: Create a new candidate
 *     tags:
 *       - Candidates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewCandidateSchema"
 *     responses:
 *       "201":
 *         description: Candidate created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CandidateResponseSchema"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     NewCandidateSchema:
 *       type: object
 *       properties:
 *         position_id:
 *           type: number
 *         fullname:
 *           type: string
 *           minLength: 2
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         birthdate:
 *           type: string
 *           format: date
 *         current_salary:
 *           type: number
 *         expected_salary:
 *           type: number
 *       required:
 *         - position_id
 *         - fullname
 *         - email
 *         - phone
 *         - birthdate
 *         - current_salary
 *         - expected_salary
 *     CandidateResponseSchema:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         position_id:
 *           type: integer
 *         fullname:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         birthdate:
 *           type: string
 *           format: date-time
 *         current_salary:
 *           type: number
 *         expected_salary:
 *           type: number
 *         final_salary:
 *           type: number
 *           nullable: true
 *         createdat:
 *           type: string
 *           format: date-time
 *         updatedat:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *       required:
 *         - id
 *         - position_id
 *         - fullname
 *         - email
 *         - phone
 *         - birthdate
 *         - current_salary
 *         - expected_salary
 *         - final_salary
 *         - createdat
 *         - updatedat
 *         - status
 */

/**
 * @openapi
 * /api/candidates:
 *   get:
 *     summary: Get all candidates
 *     tags:
 *       - Candidates
 *     responses:
 *       "200":
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/CandidateResponseSchema"
 */

/**
 * @openapi
 * /api/candidates/{id}:
 *   delete:
 *     summary: Delete a candidate by ID
 *     tags:
 *       - Candidates
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the candidate to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       "200":
 *         description: Candidate deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CandidateResponseSchema"
 */

/**
 * @openapi
 * /api/candidates/position/{id}:
 *   get:
 *     summary: Get all candidates
 *     tags:
 *       - Candidates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the position to retrieve
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *            - hired
 *            - candidate
 *     responses:
 *       "200":
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/CandidateResponseSchema"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     CandidateResponseSchema:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         position_id:
 *           type: integer
 *         fullname:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         birthdate:
 *           type: string
 *           format: date-time
 *         current_salary:
 *           type: number
 *         expected_salary:
 *           type: number
 *         final_salary:
 *           type: number
 *           nullable: true
 *         createdat:
 *           type: string
 *           format: date-time
 *         updatedat:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *       required:
 *         - id
 *         - title
 *         - position_id
 *         - fullname
 *         - email
 *         - phone
 *         - birthdate
 *         - current_salary
 *         - expected_salary
 *         - final_salary
 *         - createdat
 *         - updatedat
 *         - status
 */
