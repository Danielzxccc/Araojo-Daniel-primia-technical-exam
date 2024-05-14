import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Position } from '../api/openapi'
import useGetPositions from '../hooks/useGetPositions'

import { formatToPesoCurrency } from '../utils/utils'
import { Link } from 'react-router-dom'

export default function Positions() {
  const { data, isLoading, error, isError } = useGetPositions()

  if (isError) {
    const errorBody = error as any
    return errorBody.body.message
  }

  return (
    <>
      <div className='mb-4 flex justify-end'>
        <Link to='/new-position'>
          <Button type='button'>Add New Position</Button>
        </Link>
      </div>
      {isLoading ? (
        <>Loading....</>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-row auto-rows-max'>
          {data?.map((item, index) => {
            return (
              <PositionCards
                key={index}
                {...item}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

function PositionCards(props: Position) {
  return (
    <div>
      <Link to={`/position/${props.id}`}>
        <Card className='max-h-80 h-full'>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>
              {formatToPesoCurrency(props.salary_range_start)} -{' '}
              {formatToPesoCurrency(props.salary_range_end)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='line-clamp-3'>{props.description}</p>
          </CardContent>
          <CardFooter>
            <p>Number of Candidates: {props.candidates}</p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
}
