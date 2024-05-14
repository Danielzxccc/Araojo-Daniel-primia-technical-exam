import { ColumnDef } from '@tanstack/react-table'
import { CandidateResponseSchema } from '../../api/openapi'
import { formatToPesoCurrency } from '../../utils/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import ConfirmDialog from '../ConfirmDialog'
import useDeleteCandidate from '../../hooks/useDeleteCandidate'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import CandidateModal from '../CandidateModal'
import HireDialog from '../HireDialog'

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
  {
    header: 'Action',
    accessorKey: 'id',
    cell: ({ cell, row }) => {
      const [deleteConfirmation, setDeleteConfirmation] = useState(false)
      const [candidateModal, setCandidateModal] = useState(false)
      const [hireModal, setHireModal] = useState(false)

      const id = Number(cell.getValue())
      const navigate = useNavigate()

      const { mutateAsync } = useDeleteCandidate()
      async function onDelete() {
        try {
          await mutateAsync({ id })
          toast.success('Deleted Successfully')
          setDeleteConfirmation(false)
        } catch (error: any) {
          setDeleteConfirmation(false)
          toast.error(error.body.message)
        }
      }

      return (
        <div className='text-center'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='h-8 w-8 p-0 flex'
              >
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setDeleteConfirmation(true)}>
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate(`/update-candidate/${id}`)}
              >
                Update
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCandidateModal(true)}>
                View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <HireDialog
            id={id}
            expected_salary={Number(row.getValue('expected_salary'))}
            onOpenChange={setHireModal}
            open={hireModal}
          />
          <ConfirmDialog
            onDelete={onDelete}
            onOpenChange={setDeleteConfirmation}
            open={deleteConfirmation}
          />

          <CandidateModal
            id={id}
            onOpenChange={setCandidateModal}
            action={setHireModal}
            open={candidateModal}
          />
        </div>
      )
    },
  },
]
