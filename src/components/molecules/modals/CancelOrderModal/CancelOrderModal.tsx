import { FormEvent } from "react";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Label from "@/components/atoms/Label/Label";
import Textarea from "@/components/atoms/TextArea/Textarea";
import Button from "@/components/atoms/Button/Button";

const CancelOrderModal = ({
  handleSubmit,
  isPending,
  open,
  setOpen,
  reason,
  setReason,
}: {
  handleSubmit: (e: FormEvent) => void;
  isPending: boolean;
  open: boolean;
  setOpen: (item: boolean) => void;
  reason: string;
  setReason: (reason: string) => void;
}) => {
  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title="Cancel Order"
      description="Please provide a reason for cancelling this order."
      className="max-w-3xl w-full"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label title="Reason for Cancellation" />
          <Textarea
            rows={5}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <Button type="submit" loading={isPending} disabled={!reason.trim()}>
          Cancel Order
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default CancelOrderModal;
