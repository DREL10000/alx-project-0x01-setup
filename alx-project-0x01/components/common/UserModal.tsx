import { UserModalProps, UserProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<UserProps>({
    id: 0,
    email: "",
    name: "",
    username: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="title"
              value={post.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="title"
              value={post.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="street"
              className="block text-gray-700 font-medium mb-2"
            >
              Street
            </label>
            <input
              type="text"
              id="street"
              name="title"
              value={post.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="suite"
              className="block text-gray-700 font-medium mb-2"
            >
              Suite
            </label>
            <input
              type="text"
              id="suite"
              name="title"
              value={post.address.suite}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="street"
              name="title"
              value={post.address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="zipcode"
              className="block text-gray-700 font-medium mb-2"
            >
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              name="title"
              value={post.address.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lat"
              className="block text-gray-700 font-medium mb-2"
            >
              Lat
            </label>
            <input
              type="text"
              id="lat"
              name="title"
              value={post.address.geo.lat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lng"
              className="block text-gray-700 font-medium mb-2"
            >
              Lng
            </label>
            <input
              type="text"
              id="lng"
              name="title"
              value={post.address.geo.lng}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="title"
              value={post.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="website"
              className="block text-gray-700 font-medium mb-2"
            >
              Website
            </label>
            <input
              type="text"
              id="phone"
              name="title"
              value={post.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="c-name"
              className="block text-gray-700 font-medium mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="c-name"
              name="title"
              value={post.company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="c-phrase"
              className="block text-gray-700 font-medium mb-2"
            >
              Catch Phrase
            </label>
            <input
              type="text"
              id="c-phrase"
              name="title"
              value={post.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="c-bs"
              className="block text-gray-700 font-medium mb-2"
            >
              Company BS
            </label>
            <input
              type="text"
              id="c-bs"
              name="title"
              value={post.company.bs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
