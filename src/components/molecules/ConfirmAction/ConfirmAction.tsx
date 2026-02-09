import Label from "@/components/atoms/Label/Label";
import Textarea from "@/components/atoms/TextArea/Textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader } from "lucide-react";

const ConfirmAction = ({
  open,
  title,
  description,
  onCancel,
  onConfirm,
  isPending,
  setOpen,
  reason,
  setReason,
}: {
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
  isPending: boolean;
  setOpen: (value: boolean) => void;
  reason?: string;
  setReason?: (reason: string) => void;
}) => {
  const showTextArea = reason !== undefined && setReason !== undefined;
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="dark:bg-gray-900">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        {showTextArea && (
          <div className="space-y-1">
            <Label title="Reason for action" />
            <Textarea
              rows={5}
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder=""
            />
          </div>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={isPending}>
            {isPending ? (
              <Loader className="animate-spin w-8 h-8" />
            ) : (
              "Continue"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmAction;
