import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CandidatesService, HireCandidateBodySchema } from '@/api/openapi'

type DataSchema = {
  id: number
  requestBody: HireCandidateBodySchema
}

export default function useHireCandidate() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn({ id, requestBody }: DataSchema) {
      const response = await CandidatesService.putApiCandidatesHire({
        id,
        requestBody,
      })

      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_CANDIDATES'],
      })
    },
  })
}
