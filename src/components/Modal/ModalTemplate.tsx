import React, {Dispatch, FC, ReactNode, SetStateAction} from 'react';
import Modal, {ModalProps} from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";
import RequestSubmitButton from "../SubmitButton/RequestSubmitButton";

interface ModalTemplateProps {
  props?: ModalProps;
  children?: ReactNode;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  isSubmitting?: boolean;
  title: string;
  handleSubmit?: () => void;
  headerDiamondClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeButtonVariant?: string;
  submitButtonVariant?: string;
  closeButtonClassName?: string;
  submitButtonClassName?: string;
  submitButtonTitle?: string;
  closeButtonTitle?: string;
  footerChildren?: ReactNode;
  hideFooter?: boolean;
}

const ModalTemplate: FC<ModalTemplateProps> = ({
                                                 props,
                                                 children,
                                                 setShow,
                                                 title,
                                                 handleSubmit,
                                                 show,
                                                 isSubmitting,
                                                 headerDiamondClassName,
                                                 headerClassName,
                                                 footerClassName,
                                                 bodyClassName,
                                                 closeButtonVariant,
                                                 submitButtonVariant,
                                                 closeButtonClassName,
                                                 submitButtonClassName,
                                                 hideFooter,
                                                 submitButtonTitle,
                                                 closeButtonTitle,
                                                 footerChildren,

                                               }) => {
  const {scrollable, fullscreen, animation, dialogClassName, contentClassName, centered, size, className} = props || {};
  const handleClose = () => setShow(false);

  return (
    <Modal
      animation={animation}
      onHide={handleClose}
      fullscreen={fullscreen}
      scrollable={scrollable}
      dialogClassName={dialogClassName}
      contentClassName={contentClassName}
      centered={centered}
      size={size}
      show={show}
      className={className}
    >
      <Modal.Header className={headerClassName} closeButton={hideFooter}>
        <Modal.Title>
          <TextWithDiamond
            diamondClassName={headerDiamondClassName}
            children={title}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={bodyClassName}>
        {children}
      </Modal.Body>
      <Modal.Footer className={footerClassName}>
        <Button
          variant={closeButtonVariant ? closeButtonVariant : 'secondary-light'}
          onClick={handleClose}
          className={`w-20 me-3 rounded-pill ${closeButtonClassName}`}
        >
          {closeButtonTitle || "Wróć" }
        </Button>

        {footerChildren ||
          <RequestSubmitButton
              props={{
                variant: submitButtonVariant ? submitButtonVariant : 'primary',
                onClick: handleSubmit,
                className: `w-20 rounded-pill ${submitButtonClassName}`
              }}
              isSubmitting={isSubmitting || false}
          >
            {submitButtonTitle || "Potwierdź"}
          </RequestSubmitButton>
        }
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTemplate;
