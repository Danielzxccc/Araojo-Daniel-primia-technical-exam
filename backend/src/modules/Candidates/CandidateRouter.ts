import * as CandidateController from './CandidateController'
import express from 'express'

export const CandidateRouter = express.Router()

CandidateRouter.get('/:id', CandidateController.findCandidate)
CandidateRouter.delete('/:id', CandidateController.deleteCandidate)
CandidateRouter.put('/:id', CandidateController.updateCandidate)
CandidateRouter.get('/', CandidateController.findCandidates)
CandidateRouter.put('/hire/:id', CandidateController.hireCandidate)

CandidateRouter.get(
  '/position/:id',
  CandidateController.findCandidatesByPosition
)

CandidateRouter.post('/', CandidateController.createCandidate)
