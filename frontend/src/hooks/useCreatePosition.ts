import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NewPositionSchema, PositionsService } from '@/api/openapi'

type DataSchema = {
  requestBody: NewPositionSchema
}

export default function useCreatePosition() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn(data: DataSchema) {
      const response = await PositionsService.postApiPositions(data)

      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_POSITIONS'] })
    },
  })
}
