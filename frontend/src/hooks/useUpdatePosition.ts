import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NewPositionSchema, PositionsService } from '@/api/openapi'

type DataSchema = {
  id: string
  requestBody: NewPositionSchema
}

export default function useUpdatePosition() {
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn({ id, requestBody }: DataSchema) {
      const response = await PositionsService.putApiPositions({
        id,
        requestBody,
      })

      return response
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['GET_POSITION', String(data.id)],
      })
    },
  })
}
