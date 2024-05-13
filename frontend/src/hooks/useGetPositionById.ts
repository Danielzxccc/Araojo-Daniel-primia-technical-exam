import { useQuery } from '@tanstack/react-query'
import { PositionsService } from '@/api/openapi'

export default function useGetPositions(id: string) {
  return useQuery({
    queryKey: ['GET_POSITION', id],
    queryFn: async () => {
      const response = await PositionsService.getApiPositions1({ id })

      return response
    },
  })
}
