import CandidateForm, { candidateSchema } from '../components/CandidateForm'
import { z } from 'zod'
import useCreateCandidate from '../hooks/useCreateCandidate'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function NewCandidate() {
  const navigate = useNavigate()
  const defaultValues = {
    position_id: 0,
    phone: '',
    email: '',
    current_salary: 0,
    expected_salary: 0,
    fullname: '',
  }

  const { mutateAsync, isPending } = useCreateCandidate()

  async function onSubmit(data: z.infer<typeof candidateSchema>) {
    try {
      await mutateAsync({ requestBody: data })
      toast.success('Created Successfully')
      navigate('/candidates')
    } catch (error: any) {
      toast.error(error.body.message)
    }
  }
  return (
    <div>
      <CandidateForm
        candidate={defaultValues}
        isPending={isPending}
        onSubmit={onSubmit}
      />
    </div>
  )
}
