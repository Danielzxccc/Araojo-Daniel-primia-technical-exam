import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CandidatesService, NewCandidateSchema } from '@/api/openapi'

type DataSchema = {
  id: number
  requestBody: NewCandidateSchema
}

export default function useUpdateCandidate() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn({ id, requestBody }: DataSchema) {
      const response = await CandidatesService.putApiCandidates({
        id,
        requestBody,
      })

      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_CANDIDATE'],
      })
      queryClient.invalidateQueries({
        queryKey: ['GET_CANDIDATES'],
      })
    },
  })
}
