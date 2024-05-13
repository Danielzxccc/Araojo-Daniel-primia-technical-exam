import { ColumnDef } from '@tanstack/react-table'
import { CandidateResponseSchema } from '../../api/openapi'
import { formatToPesoCurrency } from '../../utils/utils'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<CandidateResponseSchema>[] = [
  {
    accessorKey: 'fullname',
    header: 'Full Name',
  },
  {
    accessorKey: 'title',
    header: 'Job Title',
  },
  {
    accessorKey: 'expected_salary',
    header: 'Expected Salary',
    cell: ({ row }) => {
      const formatedSalary = formatToPesoCurrency(
        row.getValue('expected_salary')
      )
      return <>{formatedSalary}</>
    },
  },
  {
    accessorKey: 'current_salary',
    header: 'Current Salary',
    cell: ({ row }) => {
      const formatedSalary = formatToPesoCurrency(
        row.getValue('current_salary')
      )
      return <>{formatedSalary}</>
    },
  },
]
