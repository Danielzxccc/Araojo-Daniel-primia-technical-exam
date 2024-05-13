import * as PositionController from './PositionController'
import express from 'express'

export const PositionRouter = express.Router()

PositionRouter.get('/:id', PositionController.findPosition)
PositionRouter.put('/:id', PositionController.updatePosition)
PositionRouter.delete('/:id', PositionController.deletePosition)
PositionRouter.get('/', PositionController.findPositions)
PositionRouter.post('/', PositionController.createPosition)
