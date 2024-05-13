import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from './ui/button'

type DeleteConfirmDialogProps = {
  onDelete(): Promise<void>
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ConfirmDialog({
  onDelete,
  open,
  onOpenChange,
}: DeleteConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your data
            from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant='secondary'
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={onDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
