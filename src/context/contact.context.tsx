"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ContactContextType = {
    isContactModalOpen: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContact = () => {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error("useContact must be used within a ContactProvider");
    }
    return context;
};

type ContactProviderProps = {
    children: ReactNode;
};

export const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <ContactContext.Provider
            value={{
                isContactModalOpen,
                openContactModal,
                closeContactModal,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

