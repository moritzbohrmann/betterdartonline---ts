import { UUID } from "crypto";

export type IPlayer = {
   uuid: UUID;
   username: string;
};

export type ILobbyState = {
   players: Array<IPlayer>;
};
