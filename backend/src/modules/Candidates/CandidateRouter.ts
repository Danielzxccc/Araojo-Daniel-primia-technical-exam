import * as CandidateController from './CandidateController'
import express from 'express'

export const CandidateRouter = express.Router()

CandidateRouter.get('/', CandidateController.findCandidates)
CandidateRouter.delete('/:id', CandidateController.deleteCandidate)

CandidateRouter.get(
  '/position/:id',
  CandidateController.findCandidatesByPosition
)

CandidateRouter.post('/', CandidateController.createCandidate)
