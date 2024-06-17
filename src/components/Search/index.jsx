import { useState } from "react";
import "./search.css";

export const Search = () => {
    const [restoSearch, setRestoSearch] = useState("");
    

    const handlerestoSearch = () => {
        console.log(restoSearch);
    }

    return (
        <>
            <div className="d-flex">
                <input className="form-control me-2" type="search" value={restoSearch} onChange={(e) => { setRestoSearch(e.target.value) }} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" onClick={handlerestoSearch}>Search</button>
            </div>
        </>
    )
}