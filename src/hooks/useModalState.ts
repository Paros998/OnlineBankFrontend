import { useState } from "react";

export const useModalState = <T extends unknown>() => {
  const [showModal, setShowModal] = useState(false);
  const [entity, setEntity] = useState<T>();

  const toggleVisibility = (givenEntity?: T) => {
    setEntity(givenEntity);
    setShowModal(prevState => !prevState);
  };

  return { showModal, toggleVisibility, entity };
};
