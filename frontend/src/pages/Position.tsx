import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatToPesoCurrency } from '../utils/utils'
import useGetPositions from '../hooks/useGetPositionById'
import { useParams } from 'react-router-dom'
import { Position as PositionType } from '../api/openapi'
import { useState } from 'react'
import { Button } from '../components/ui/button'
export default function Position() {
  const { positionid } = useParams()
  const [editMode, setEditMode] = useState(false)

  const { data, error, isError, isLoading } = useGetPositions(positionid ?? '')

  if (isLoading) {
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

  if (data) {
    return (
      <>
        <Button
          variant='secondary'
          type='button'
          onClick={() => setEditMode(true)}
        >
          Edit
        </Button>

        {editMode ? <>test</> : <PositionCard data={data} />}
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
