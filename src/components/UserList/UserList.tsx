import { UserType } from "./UserType";
import { UserListItem } from "./UserListItem";

// Recoil
import { useSetRecoilState } from "recoil";
import { userAtomState } from "../recoil/userAtomState";
import { useState } from "react";
interface UsersListProp<UserType> {
  persons: UserType[];
}

export const UserList = ({ persons }: UsersListProp<UserType>) => {
  const [isAllActive, setIsAllActive] = useState(false);
  const setUsersState = useSetRecoilState(userAtomState);

  const setAllActive = () => {
    setUsersState((prevUserState) => {
      console.log(prevUserState);
      const updatedUsers = prevUserState.map((user) => {
        return { ...user, active: !user.active };
      });
      return updatedUsers;
    });
    setIsAllActive(!isAllActive);
  };
  return (
    <div className="flex justify-end">
      <div className="relative flex items-end">
        <div className="relative z-10 p-4">
          <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            {/* Repeated Element */}
            {persons.map((person, index) => (
              <UserListItem
                key={index}
                {...person}
              />
            ))}
            {/* End Repeated Element */}

            <div className="p-4">
              <div
                className="px-4 py-2 font-medium text-center rounded-md shadow-sm cursor-pointer ring-1 ring-slate-700/10 hover:bg-slate-50"
                onClick={setAllActive}
              >
                {!isAllActive ? "Activate All" : "Deactivate"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
