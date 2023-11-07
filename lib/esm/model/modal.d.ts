export interface ModalProps {
    visible: boolean;
    className?: string;
    title?: React.ReactNode;
    closeIcon?: boolean | React.ReactNode;
    children: React.ReactNode;
    maskClosable?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    okButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    cancelButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
