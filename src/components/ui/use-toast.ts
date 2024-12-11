import { toast } from "sonner"

interface ToastProps {
  title?: string
  description: string
  variant?: "default" | "destructive"
}

export const useToast = () => {
  const showToast = ({ description, variant }: ToastProps) => {
    if (variant === "destructive") {
      toast.error(description)
    } else {
      toast.success(description)
    }
  }

  return {
    toast: showToast,
  }
} 