export type ModalProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
  onCancel: () => void;
  onSave: () => void;
};
