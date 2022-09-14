import { useState } from "react";




export const UseModal = (initialValue=false) => {
    
    const [isOpen, SetIsOpen] = useState(initialValue)

    const openModal = ()=>SetIsOpen(false)
    const closeModal = ()=>SetIsOpen(true)

    return [ isOpen, openModal, closeModal ]
}


