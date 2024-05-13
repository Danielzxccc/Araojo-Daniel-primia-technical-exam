import upload from '../../utils/multer'
import * as CandidateController from './CandidateController'
import express from 'express'

export const CandidateRouter = express.Router()

CandidateRouter.get('/', CandidateController.findCandidates)

CandidateRouter.get(
  '/position/:id',
  CandidateController.findCandidatesByPosition
)

CandidateRouter.post(
  '/',
  upload.array('files'),
  CandidateController.createCandidate
)
