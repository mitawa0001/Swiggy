import { useState } from "react";
import "./search.css";

export const Search = (props) => {
    const [restoSearch, setRestoSearch] = useState("");


    const handlerestoSearch = () => {
        const SearchFilter = props.resData.filter(
            (res) => res.info.name.toLowerCase().includes(restoSearch.toLowerCase())
        )
        setRestoSearch(SearchFilter)
        console.log(resData)    
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