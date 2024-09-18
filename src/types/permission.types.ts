import { TPetDoor } from "./petDoor.types";

type TPermissionRange = {
    id: string;
    beggining: string;
    finish: string;
}

export type TPermission = {
    id: string;
    petDoor: TPetDoor;
    ranges?: TPermissionRange[] | null;
}

