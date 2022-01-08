import React, {Dispatch} from "react";

export interface ModalBasicProps {
  setShowModal:Dispatch<React.SetStateAction<boolean>>;
  showModal:boolean;
  isSubmitting?:boolean;
  handleSubmit?:()=>Promise<void>;
}