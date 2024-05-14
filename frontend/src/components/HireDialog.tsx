import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import useHireCandidate from '../hooks/useHireCandidate'
import toast from 'react-hot-toast'

export default function HireDialog({
  onOpenChange,
  open,
  expected_salary,
  id,
}: {
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
  expected_salary: number
  id: number
}) {
  const [finalSalary, setFinalSalary] = useState(expected_salary)

  const { mutateAsync } = useHireCandidate()

  async function onHireCandidate() {
    try {
      await mutateAsync({
        id,
        requestBody: {
          final_salary: finalSalary,
        },
      })
      toast.success('Hired Sucessfully')
      onOpenChange(false)
    } catch (error: any) {
      toast.error(error.body.message)
      onOpenChange(false)
    }
  }
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hire this candidate?</DialogTitle>
        </DialogHeader>
        <Label>Final Salary</Label>
        <Input
          value={finalSalary}
          type='number'
          onChange={(e) => setFinalSalary(Number(e.target.value))}
        />
        <DialogFooter>
          <Button
            variant='secondary'
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button onClick={onHireCandidate}>Hire</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
