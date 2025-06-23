import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import { UserPageProps } from "@/interfaces";
import React from "react";

const Users: React.FC<UserPageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map(
            (
              {
                address,
                company,
                email,
                id,
                name,
                phone,
                username,
                website,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                address={address}
                company={company}
                email={email}
                id={id}
                name={name}
                username={username}
                phone={phone}
                website={website}
                key={key}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
