import { PopupModal } from "react-calendly";

export default function Calendly({isOpen, setIsOpen }) {
    
    return (
        <>
            <PopupModal
                url="https://calendly.com/d/cyry-97y-ssp/patronum-demo-call?month=2026-04"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={document.getElementById("footer")}
            />
        </>
    )
}