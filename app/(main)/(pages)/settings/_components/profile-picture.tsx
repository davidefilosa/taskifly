"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  userImage: string | null;
  onDelete?: () => void;
  onUpload: () => void;
};

export const ProfilePicture = ({ userImage, onUpload, onDelete }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center"></div>
    </div>
  );
};
