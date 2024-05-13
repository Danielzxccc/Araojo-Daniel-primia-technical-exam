import { useQuery } from '@tanstack/react-query'
import { CandidatesService } from '@/api/openapi'

export default function useGetCandidates() {
  return useQuery({
    queryKey: ['GET_CANDIDATES'],
    queryFn: async () => {
      const response = await CandidatesService.getApiCandidates()

      return response
    },
  })
}
