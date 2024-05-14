import { useQuery } from '@tanstack/react-query'
import { CandidatesService } from '@/api/openapi'

export default function useGetCandidatesByPosition(
  id: string,
  status: 'hired' | 'candidate'
) {
  return useQuery({
    queryKey: ['GET_CANDIDATES_BY_POSITION', id, status],
    queryFn: async () => {
      const response = await CandidatesService.getApiCandidatesPosition({
        id,
        status,
      })

      return response
    },
  })
}
