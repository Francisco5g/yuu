import { app } from "./";
import { getStorage, listAll, ref, StorageReference } from "firebase/storage";

export const storage = getStorage(app);
