import { UserData, UserModalProps } from "@/interfaces";

import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    userId: 1,
    address: {
      city: "",
      geo: { lat: "", lng: "" },
      street: "",
      suite: "",
      zipcode: "",
    },
    company: { bs: "", catchPhrase: "", name: "" },
    email: "",
    name: "",
    phone: "",
    username: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else if (name.startsWith("address.geo.")) {
      const geoField = name.split(".")[2];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [geoField]: value,
          },
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted user data:', user);
  }

  return (
    
  )
};

export default UserModal;
