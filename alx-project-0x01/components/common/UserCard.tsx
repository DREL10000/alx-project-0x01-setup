import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  address,
  company,
  email,
  id,
  name,
  phone,
  username,
  website,
}) => {
  return (
    <div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">User ID:</p>
        <p>{id}</p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Username:</p>
        <p>{username}</p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Name:</p>
        <p>{name}</p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Email:</p>
        <p>{email}</p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Phone:</p>
        <p>{phone}</p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Company:</p>
        <p>
          {company.name} {company.catchPhrase} {company.bs}
        </p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Website:</p>
        <p>{website}</p>
      </div>
      <div className="flex space-x-4 my-4">
        <p className="font-bold text-blue-300">Address:</p>
        <p>
          {address.street} {address.suite} {address.zipcode} {address.city}{" "}
          {address.geo.lat} {address.geo.lng}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
