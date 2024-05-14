import { useNavigate, useParams } from 'react-router-dom'
import useGetCandidate from '../hooks/usetGetCandidate'
import CandidateForm from '../components/CandidateForm'
import { NewCandidateSchema } from '../api/openapi'
import toast from 'react-hot-toast'
import useUpdateCandidate from '../hooks/useUpdateCandidate'

export default function UpdateCandidate() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useGetCandidate(Number(id))
  const { mutateAsync, isPending } = useUpdateCandidate()

  if (isLoading) {
    return '...loading'
  }

  if (isError) {
    const errorBody = error as any
    return <div className='2xl text-center'>{errorBody.body.message}</div>
  }

  async function onSubmit(data: NewCandidateSchema) {
    try {
      await mutateAsync({ id: Number(id), requestBody: data })
      toast.success('Updated Sucessfully')
      navigate(-1)
    } catch (error: any) {
      toast.error(error.body.message)
    }
  }

  if (data) {
    return (
      <div>
        <CandidateForm
          candidate={data}
          isPending={isPending}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}
