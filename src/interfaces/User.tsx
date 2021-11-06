import {Runtime} from "inspector";

export interface User {
  sub:string,
  authorities: {
    key:number,
    authority:string
  }[],
  iat: number,
  exp: number
}