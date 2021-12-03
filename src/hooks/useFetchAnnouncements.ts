import {useEffect, useState} from "react";
import {User} from "../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../enums/Roles";
import {toast} from "react-toastify";
import axios from "axios";
import {AnnouncementsResponseData} from "../interfaces/DatabaseModels/AnnouncementsResponseData";

export function useFetchAnnouncements(){
  const [announcements,setAnnouncements] =  useState<AnnouncementsResponseData[]>()

  useEffect( () => {

    const fetchAnnouncements = async ()=> {
      const token = localStorage.getItem('JWT_USER_TOKEN');
      if (!token) return;

      const tokenData: User = jwtDecode(token);
      const role = tokenData?.authorities[0].authority;

      if (role !== (Roles.RoleAdmin || Roles.RoleEmployee))
        return;

      try {
        const {data} = await axios.get<AnnouncementsResponseData[]>("/dictionary/announcements");
        setAnnouncements(data);
      } catch (e: any) {
        toast.error(e.message)
      }
    };

    fetchAnnouncements().catch();
  },[setAnnouncements])

  return {announcements};

}

