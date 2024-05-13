import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PositionsService } from '@/api/openapi'

type DataSchema = {
  id: string
}

export default function useDeletePosition() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn({ id }: DataSchema) {
      const response = await PositionsService.deleteApiPositions({
        id,
      })

      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_POSITIONS'],
      })
    },
  })
}
