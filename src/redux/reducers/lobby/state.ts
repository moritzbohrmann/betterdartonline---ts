import { UUID } from "crypto";

type LobbyPlayer = {
   uuid: UUID;
   username: string;
};

interface LobbyState {
   players: LobbyPlayer[];
   filter: string;
}

const initialState: LobbyState = {
   players: [
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
      { uuid: crypto.randomUUID(), username: "Moritz" },
   ],
   filter: "",
};

export default initialState;
