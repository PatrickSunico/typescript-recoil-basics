import { RecoilState, atom, selector } from "recoil";
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
      roles: ["Admin", "System Admin"],
    },
  ],
});

// Manage Active Status
// export const activeSelector = selector<boolean>({
//   key: "activeSelector",
//   get: ({ get }) => {
//     const users = get(userAtomState);
//     // Perform any logic to extract the 'active' boolean value from the user object
//     // For example, if you want to check if any user is active, you can use Array.prototype.some() method
//     return users.some((user) => user.active);
//   },
// });
