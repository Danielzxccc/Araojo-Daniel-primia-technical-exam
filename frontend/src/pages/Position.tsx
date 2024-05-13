import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatToPesoCurrency } from '@/utils/utils'
import useGetPositions from '../hooks/useGetPositionById'
import { useNavigate, useParams } from 'react-router-dom'
import { Position as PositionType } from '@/api/openapi'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import PositionForm from '@/components/PositionForm'
import { positionSchema } from './NewPosition'
import toast from 'react-hot-toast'
import { z } from 'zod'
import useUpdatePosition from '@/hooks/useUpdatePosition'
import useDeletePosition from '@/hooks/useDeletePosition'
import ConfirmDialog from '@/components/ConfirmDialog'

export default function Position() {
  const { positionid } = useParams()
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)

  const { data, error, isError, isLoading, isFetching } = useGetPositions(
    positionid ?? ''
  )

  const { mutateAsync, isPending } = useUpdatePosition()
  const { mutateAsync: deleteMutation, isPending: isDeleting } =
    useDeletePosition()

  if (isLoading || isFetching || isDeleting) {
    return 'Loading..'
  }

  if (isError) {
    const errorBody = error as any
    return (
      <h1 className='font-bold text-2xl text-center'>
        {errorBody.body.message}
      </h1>
    )
  }

  async function onDeletePosition() {
    try {
      await deleteMutation({ id: positionid ?? '' })
      toast.success('Deleted Successfully')
      navigate('/')
    } catch (error: any) {
      toast.error(error.body.message)
    }
  }

  async function onSubmit(values: z.infer<typeof positionSchema>) {
    try {
      await mutateAsync({ id: positionid ?? '', requestBody: values })
      toast.success('Updated Successfully')
      setEditMode(false)
    } catch (error: any) {
      toast.error(error.body.message)
    }
  }

  if (data) {
    return (
      <>
        {editMode ? (
          <PositionForm
            isPending={isPending}
            position={data}
            onSubmit={onSubmit}
          />
        ) : (
          <div>
            <div className='flex gap-4'>
              <Button
                variant='secondary'
                type='button'
                onClick={() => setEditMode(true)}
              >
                Edit
              </Button>
              <Button
                variant='destructive'
                onClick={() => setDeleteConfirmation(true)}
              >
                Delete
              </Button>
            </div>
            <PositionCard data={data} />
          </div>
        )}
        <ConfirmDialog
          onDelete={onDeletePosition}
          open={deleteConfirmation}
          onOpenChange={setDeleteConfirmation}
        />
      </>
    )
  }
}

function PositionCard({ data }: { data: PositionType }) {
  return (
    <Card className='max-h-80 h-full'>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>
          {formatToPesoCurrency(data.salary_range_start)} -{' '}
          {formatToPesoCurrency(data.salary_range_end)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data.description}</p>
      </CardContent>
      <CardFooter>
        <p>Number of Candidates: 0</p>
      </CardFooter>
    </Card>
  )
}
