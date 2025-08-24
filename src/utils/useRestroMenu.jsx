import { useEffect, useState } from "react";
import { menu_API } from "./mockdata";

const useRestromenu = (resid) => {
    const [resinfo, setresinfo] = useState(null);

    useEffect(() => {
        MenuAPI();
    }, [resid]);

    const MenuAPI = async () => {
        const data = await fetch(menu_API + resid);
        const json = await data.json();
        setresinfo(json.data);

    }

    return resinfo;
}
export default useRestromenu;