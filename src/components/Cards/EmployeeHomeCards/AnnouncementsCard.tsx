import React, {FC} from 'react';
import CardTemplate from "../CardTemplate";
import {useFetchAnnouncements} from "../../../hooks/useFetchAnnouncements";
import {Spinner} from "react-bootstrap";

interface AnnouncementsProps {
  className?:string;
}

const AnnouncementsCard: FC<AnnouncementsProps> = ({className}) => {

  const {announcements} = useFetchAnnouncements();

  return (
    <CardTemplate header={'Ogłoszenia'}
                  className={`text-light fst-normal bg-dark border-light bg-opacity-75 ${className}`}
                  headerClassName='text-success'
                  bodyClassName='thumb-success'
                  headerDiamondClassName='text-success'
    >
        {
          announcements ? (
                announcements.map(value => (
                  <p>{value.announcement}</p>
                ))
          ) : (
            <Spinner animation={"border"} variant={"success"}/>
          )
        }
    </CardTemplate>
  );
};

export default AnnouncementsCard;