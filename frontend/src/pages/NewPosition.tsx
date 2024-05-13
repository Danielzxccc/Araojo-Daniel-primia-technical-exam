import { z } from 'zod'
import useCreatePosition from '@/hooks/useCreatePosition'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import PositionForm from '../components/PositionForm'

export const positionSchema = z
  .object({
    title: z.string().min(3),
    description: z.string().min(5),
    salary_range_start: z.coerce.number().min(10_000),
    salary_range_end: z.coerce.number().min(10_000),
  })
  .refine((data) => data.salary_range_end >= data.salary_range_start, {
    path: ['salary_range_end'],
    message:
      'Salary range end must be greater than or equal to salary range start',
  })

export default function NewPosition() {
  const navigate = useNavigate()

  const defaultValues = {
    title: '',
    description: '',
    salary_range_start: 10_000,
    salary_range_end: 10_000,
  }

  const { mutateAsync, isPending } = useCreatePosition()

  async function onSubmit(values: z.infer<typeof positionSchema>) {
    console.log(values)

    try {
      await mutateAsync({ requestBody: values })
      toast.success('Created Successfully')
      navigate('/')
    } catch (error: any) {
      toast.error(error.body.message)
    }
  }

  return (
    <PositionForm
      onSubmit={onSubmit}
      position={defaultValues}
      isPending={isPending}
    />
  )
}
