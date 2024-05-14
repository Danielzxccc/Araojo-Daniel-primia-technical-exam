import { columns } from '@/components/candidate-table/columns'
import { DataTable } from '@/components/candidate-table/data-table'
import useGetCandidates from '@/hooks/useGetCandidates'
import { useMemo, useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export default function Candidates() {
  const { data, isLoading } = useGetCandidates()
  const [searchKey, setSearchKey] = useState('')

  const filteredData = useMemo(() => {
    return data?.filter(
      (item) =>
        item.fullname.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.title.toLowerCase().includes(searchKey.toLowerCase())
    )
  }, [searchKey, data])

  if (isLoading) {
    return 'Loading...'
  }

  if (data) {
    return (
      <div>
        <div className='flex justify-end'>
          <Input
            placeholder='Search'
            className='mb-2'
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <Link to='/new-candidate'>
            <Button type='button'>Add Candidate</Button>
          </Link>
        </div>
        <DataTable
          columns={columns}
          data={filteredData ?? []}
        />
      </div>
    )
  }
}
