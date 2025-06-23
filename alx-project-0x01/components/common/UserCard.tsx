import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({
  address,
  company,
  id,
  name,
  phone,
  username,
  website,
  email,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">{username}</p>
      <p className="text-gray-600">{company.name}</p>
      <p className="text-gray-600">{company.catchPhrase}</p>
      <p className="text-gray-600">{company.bs}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{website}</p>
      <p className="text-gray-600">{address.suite}</p>
      <p className="text-gray-600">{address.street}</p>
      <p className="text-gray-600">{address.city}</p>
      <p className="text-gray-600">{address.zipcode}</p>
      <p className="text-gray-600">
        ({address.geo.lat}, {address.geo.lng})
      </p>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
