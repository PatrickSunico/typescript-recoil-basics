import { atom } from "recoil";
import { UserType } from "../UserList/UserType";

export const userAtomState = atom<UserType[]>({
  key: "userState",
  default: [
    {
      id: 1,
      name: "Johnson Dankson",
      age: 20,
      active: false,
      profileImage: "https://tailwindui.com/img/avatar-1.jpg",
      roles: ["Admin", "System Admin"],
    },

    {
      id: 2,
      name: "Johnson Jason",
      age: 20,
      active: false,
      profileImage: "https://tailwindui.com/img/avatar-2.jpg",
      roles: ["Admin", "System Admin"],
    },

    {
      id: 3,
      name: "Johnson Swagson",
      age: 20,
      active: false,
      profileImage: "https://tailwindui.com/img/avatar-3.jpg",
      roles: ["Admin", "System Admin", "QA"],
    },
  ],
});
