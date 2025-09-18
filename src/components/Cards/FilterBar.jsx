import { Button } from "react-bootstrap";
import "./style.css";

const FilterBar = ({ 
    onShowAll, 
    onFilterByRating, 
    onFilterByVeg, 
    searchValue, 
    onSearchChange, 
    onSearch 
}) => {
    return (
        <ul className="filter-sort">
            <li>
                <Button className="btn resto-filter-btn" onClick={onShowAll}>
                    All Restaurants
                </Button>
            </li>
            <li>
                <Button className="btn resto-filter-btn" onClick={onFilterByRating}>
                    Ratings 4.5+
                </Button>
            </li>
            <li>
                <Button className="btn resto-filter-btn" onClick={onFilterByVeg}>
                    Pure Veg
                </Button>
            </li>
            <li>
                <div className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        value={searchValue}
                        onChange={onSearchChange}
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit" onClick={onSearch}>
                        Search
                    </button>
                </div>
            </li>
        </ul>
    );
};

export default FilterBar;
