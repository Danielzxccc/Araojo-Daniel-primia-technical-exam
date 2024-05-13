import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CandidatesService, NewCandidateSchema } from '@/api/openapi'

type DataSchema = {
  formData: NewCandidateSchema
}

export default function useCreateCandidate() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn(data: DataSchema) {
      const response = await CandidatesService.postApiCandidates(data)

      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_CANDIDATES'] })
    },
  })
}
