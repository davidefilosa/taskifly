import React from "react";
import { ProfilePicture } from "./_components/profile-picture";
import { ProfileForm } from "@/components/form/profile-form";
import { currentUser } from "@clerk/nextjs";

const SettingsPage = async () => {
  const authUser = await currentUser();

  if (!currentUser) return null;

  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture />
        <ProfileForm />
      </div>
    </div>
  );
};

export default SettingsPage;
