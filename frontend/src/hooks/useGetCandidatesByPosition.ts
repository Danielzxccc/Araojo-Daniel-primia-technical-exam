import { useQuery } from '@tanstack/react-query'
import { CandidatesService } from '@/api/openapi'

export default function useGetCandidatesByPosition(id: string) {
  return useQuery({
    queryKey: ['GET_CANDIDATES_BY_POSITION'],
    queryFn: async () => {
      const response = await CandidatesService.getApiCandidatesPosition({ id })

      return response
    },
  })
}
