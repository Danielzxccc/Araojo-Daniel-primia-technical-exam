import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import useGetCandidate from '../hooks/usetGetCandidate'
import { formatToPesoCurrency } from '../utils/utils'

type DialogProps = {
  id: number
  open: boolean
  action: React.Dispatch<React.SetStateAction<boolean>>
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CandidateModal({
  id,
  open,
  action,
  onOpenChange,
}: DialogProps) {
  const { data } = useGetCandidate(id)

  if (data) {
    return (
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{data.title}</DialogTitle>
          </DialogHeader>
          <Card className='max-h-80 h-full'>
            <CardHeader>
              <CardTitle>{data.fullname}</CardTitle>
              <CardDescription>
                {formatToPesoCurrency(data.expected_salary)} - Expected Salary
              </CardDescription>
              <CardDescription>
                {formatToPesoCurrency(data.current_salary)} - Current Salary
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </CardContent>
          </Card>
          <DialogFooter>
            <Button
              variant='secondary'
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button onClick={() => action(true)}>Hire</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
}
