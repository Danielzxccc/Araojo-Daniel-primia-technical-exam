import { useQuery } from '@tanstack/react-query'
import { CandidatesService } from '@/api/openapi'

export default function useGetCandidate(id: number) {
  return useQuery({
    queryKey: ['GET_CANDIDATE', id],
    queryFn: async () => {
      const response = await CandidatesService.getApiCandidates1({ id })

      return response
    },
  })
}
