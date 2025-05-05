// inspectable photo using Flowbite Modal
// https://flowbite-react.com/docs/components/modal#pop-up-modal

"use client";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";

type PhotoProps = {
    photo: string;
    title: string;
    photo_style: string;
}

export const Photo: React.FC<PropsWithChildren<PhotoProps>> = ({ photo, title, photo_style, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return <>
        <Link to="#" onClick={() => setModalOpen(true)}>
            <img src={photo} className={photo_style} alt={title} />
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
                    <a target="_blank" href={photo}>
                        <img src={photo} alt={title} />
                    </a>
                </figure>
            </ModalBody>
            <ModalFooter className="text-white">
                {children}
            </ModalFooter>

        </Modal>
    </>
}