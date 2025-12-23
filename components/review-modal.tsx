"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ReviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  unansweredCount: number
  onReview: () => void
  onFinish: () => void
}

export function ReviewModal({ open, onOpenChange, unansweredCount, onReview, onFinish }: ReviewModalProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Atenção!</AlertDialogTitle>
          <AlertDialogDescription>
            Você tem {unansweredCount} questão(ões) não respondida(s). Deseja revisar antes de finalizar o simulado?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onReview}>Revisar Questões</AlertDialogCancel>
          <AlertDialogAction onClick={onFinish}>Finalizar Mesmo Assim</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
