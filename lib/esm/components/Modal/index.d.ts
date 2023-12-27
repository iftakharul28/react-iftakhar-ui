import React from 'react';
import Content from './Content';
type Props = {
    visible: boolean;
    maskClosable?: boolean;
    cancelButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare const Modal: {
    (props: Props): React.ReactPortal | null | undefined;
    Content: typeof Content;
};
export {};
