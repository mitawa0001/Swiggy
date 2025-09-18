import { useEffect, useState } from "react";

const useOnlineuser = () => {
    const [online, setonlinestatus] = useState(true);
    useEffect(() => {
        handleonline();
    }, [])

    const handleonline = () => {
        window.addEventListener("offline", () => {
            setonlinestatus(false)
        });

        window.addEventListener("online", () => {
            setonlinestatus(true)

        });

    }
    return online;
}
export default useOnlineuser;