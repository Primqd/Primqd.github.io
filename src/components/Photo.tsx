// inspectable photo using Flowbite Modal
// https://flowbite-react.com/docs/components/modal#pop-up-modal

"use client";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type PhotoProps = {
    photo: string;
    title: string;
    description: string;
    photo_style: string;
}

export const Photo: React.FC<PhotoProps> = ({ photo, title, description, photo_style }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return <>
        <Link to="#" onClick={() => setModalOpen(true)}>
            <img src={photo} className={photo_style} />
        </Link>
        <Modal
            dismissible
            show={modalOpen}
            onClose={() => setModalOpen(false)}>
            <ModalHeader className="bg-neutral-800 text-white">
                {title}
            </ModalHeader>
            <ModalBody>
                <figure>
                    <img src={photo} />
                </figure>
            </ModalBody>
            <ModalFooter className="text-white">
                {description}
            </ModalFooter>

        </Modal>
    </>
}