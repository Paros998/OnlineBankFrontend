import React, { FC } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { LockFill, Trash, UnlockFill } from 'react-bootstrap-icons';
import { CreditCardModel } from '../../../../../interfaces/DatabaseModels/CreditCardModel';
import { EditCardConfirmModalEntity } from '../../../../../interfaces/EditCardConfirmModalEntity';
import { OrderTypes } from '../../../../../enums/OrderTypes';
import { ToastContent } from '../hooks/useCreditCardOperations';

interface CreditCardProps extends CreditCardModel {
  imgSrc: string;
  toggleConfirmModalVisibility: (modalEntity?: EditCardConfirmModalEntity) => void;
  handleEditCard: (
    creditCard: CreditCardModel,
    toastContent: ToastContent,
    orderType: OrderTypes
  ) => Promise<void>;
}

const CreditCard: FC<CreditCardProps> = ({
  imgSrc,
  toggleConfirmModalVisibility,
  handleEditCard,
  ...props
}) => {
  return (
    <Card bg="primary-light">
      <Card.Body>
        <div className="hstack gap-3">
          <Image width="100%" height="100%" src={imgSrc}/>

          <section className="vstack justify-content-between">
            <Col xs="auto">
              <Button
                onClick={() => {
                  toggleConfirmModalVisibility({
                    bodyContent: 'Ta karta przestanie być dostępna do użytku i zostanie odpięta od twojego konta!',
                    bodyHeader: 'Czy na pewno chcesz usunąć tę kartę ?',
                    header: `Numer rachunku karty ${props.cardNumber}`,
                    handleAction: () => handleEditCard(
                      props,
                      {
                        successToastContent: 'Prośba o usunięcie karty została wysłana.',
                        errorToastContent: 'Nie udało się wysłać prośby o usunięcie karty.',
                      },
                      OrderTypes.DeleteCreditCard,
                    ).then(),
                  });
                }}
                variant="primary"
                className="rounded-circle text-white"
              >
                <Trash />
              </Button>
            </Col>

            <Col xs="auto">
              {
                props.isActive ? (
                  <Button
                    onClick={() => {
                      toggleConfirmModalVisibility({
                        bodyContent: 'Gdy zablokujesz kartę nie będziesz mógł wykonywać za jej pomocą żadnych płatności. Wykonanej operacji nie można cofnąć.',
                        bodyHeader: 'Czy na pewno chcesz zablokować tę kartę ?',
                        header: `Numer rachunku karty ${props.cardNumber}`,
                        handleAction: () => handleEditCard(
                          props,
                          {
                            successToastContent: 'Prośba o zablokowanie karty została wysłana.',
                            errorToastContent: 'Nie udało się wysłać prośby o zablokowanie karty.',
                          },
                          OrderTypes.BlockCreditCard,
                        ).then(),
                      });
                    }}
                    variant="danger"
                    className="rounded-circle text-white"
                  >
                    <LockFill className='text-center align-self-center'/>
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      toggleConfirmModalVisibility({
                        bodyContent: 'Gdy odblokujesz kartę będziesz mógł ponownie wykonywać za jej pomocą płatności.',
                        bodyHeader: 'Czy na pewno chcesz odblokować tę kartę ?',
                        header: `Numer rachunku karty ${props.cardNumber}`,
                        handleAction: () => handleEditCard(
                          props,
                          {
                            successToastContent: 'Prośba o odblokowanie karty została wysłana.',
                            errorToastContent: 'Nie udało się wysłać prośby o odblokowanie karty.',
                          },
                          OrderTypes.UnblockCreditCard,
                        ).then(),
                      });
                    }}
                    variant="success"
                    className="rounded-circle text-white"
                  >
                    <UnlockFill className='text-center align-self-center'/>
                  </Button>
                )
              }
            </Col>
          </section>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CreditCard;
