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
    thumbnail?: string; // optional thumbnail for display
}

/**
 * Renders a photo with a clickable thumbnail that opens a modal dialog displaying the full image and additional content.
 *
 * @param photo - The URL of the photo to display.
 * @param title - The title or alt text for the photo.
 * @param photo_style - The CSS class name(s) to apply to the photo element.
 * @param children - Optional React children to render in the modal footer.
 * @param thumbnail - (Optional) The URL of a thumbnail image to display instead of the main photo.
 */
export const Photo: React.FC<PropsWithChildren<PhotoProps>> = ({ photo, title, photo_style, children, thumbnail }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return <>
        <Link to="#" onClick={() => setModalOpen(true)}>
            <img src={thumbnail || photo} className={photo_style} alt={title} />
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