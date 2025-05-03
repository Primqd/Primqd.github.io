// inspectable photo using Flowbite Modal
// https://flowbite-react.com/docs/components/modal#pop-up-modal

"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";

type PhotoProps = {
    photo: string;
    description: string;
    photo_style: string;
}

export const Photo: React.FC<PhotoProps> = ({ photo, description, photo_style }) => {
    return <>{[photo, description, photo_style]}</>
}