import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CandidatesService } from '@/api/openapi'

type DataSchema = {
  id: number
}

export default function useDeleteCandidate() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn({ id }: DataSchema) {
      const response = await CandidatesService.deleteApiCandidates({
        id,
      })

      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_CANDIDATES_BY_POSITION'],
      })
    },
  })
}
