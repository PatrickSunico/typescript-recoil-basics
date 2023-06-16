import React, { useState } from "react";
import { UserType } from "./UserType";

import { useRecoilState } from "recoil";

import { userAtomState } from "../recoil/userAtomState";

export const UserListItem = ({
  id,
  name,
  age,
  active,
  profileImage,
  roles,
}: UserType) => {
  const [users, setUsers] = useRecoilState(userAtomState);

  const setUserActive = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, active: !user.active };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const deactivateColor = !active
    ? "bg-slate-200 text-slate-600/50"
    : "text-slate-950";

  return (
    <div
      className={`flex items-center justify-start px-4 py-2 ${deactivateColor}`}
    >
      <div className="relative inline-block">
        <img
          src={profileImage}
          className="flex-none w-10 h-10 rounded-full"
        />
        <span
          className={`absolute top-0 right-0 w-3 h-3 rounded-full ${
            active ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
      <div className="flex-auto ">
        <div className="m-2 text-left">
          <div className="font-medium">{name}</div>
          <div className="mt-1 text-slate-700">{age}</div>
        </div>
        <div className="flex items-center text-xs gap-x-4">
          {roles.map((role, index) => (
            <span
              key={index}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      <button
        className="cursor-pointer ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50"
        onClick={() => setUserActive()}
      >
        {!active ? "Set Active" : "Deactivate"}
      </button>
    </div>
  );
};
