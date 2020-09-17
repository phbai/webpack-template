import { types, Instance } from "mobx-state-tree";

const User = types.model({
  name: types.string,
  uid: types.number,
});

const RootStore = types.model({
  user: User,
});

export const rootStore = RootStore.create({
  user: {
    uid: 1,
    name: "test",
  },
});

export interface RootStoreType extends Instance<typeof RootStore> {}
