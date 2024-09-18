import { TPetDoor } from "./petDoor.types";
import { TPet } from "./pets.types";

export type TUser = {
    id: string;
    email: string;
    fullname: string;
    pets?: TPet[];
    petDoors?: TPetDoor[];
}