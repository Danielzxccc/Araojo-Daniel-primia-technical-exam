import { useQuery } from '@tanstack/react-query'
import { PositionsService } from '@/api/openapi'

export default function useGetPositions() {
  return useQuery({
    queryKey: ['GET_POSITIONS'],
    queryFn: async () => {
      const response = await PositionsService.getApiPositions()

      return response
    },
  })
}
