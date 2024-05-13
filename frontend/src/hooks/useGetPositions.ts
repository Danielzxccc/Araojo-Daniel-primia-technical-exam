import { useQuery } from '@tanstack/react-query'
import { PositionsService } from '@/api/openapi'

export default function useGetPositions(isHiring: string) {
  return useQuery({
    queryKey: ['GET_POSITIONS', isHiring],
    queryFn: async () => {
      const response = await PositionsService.getApiPositions({
        isHiring,
      })

      return response
    },
  })
}
