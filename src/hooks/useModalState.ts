import { useCallback, useState } from 'react';

export const useModalState = <T extends unknown>() => {
  const [showModal, setShowModal] = useState(false);
  const [entity, setEntity] = useState<T | undefined>(undefined);

  const toggleVisibility = useCallback((givenEntity?: T) => {
    givenEntity && setEntity(givenEntity);
    setShowModal(prevState => !prevState);
  }, [setEntity, setShowModal]);

  return { showModal, toggleVisibility, entity };
};
