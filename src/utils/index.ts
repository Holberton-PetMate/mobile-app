import { Storage } from "@ionic/storage";

export async function getVerifiedStorage() {
  const store = new Storage();
  await store.create();
  return store;
}
