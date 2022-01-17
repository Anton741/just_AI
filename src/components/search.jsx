const Search = ({onHandleSearch, value}) => {
        return (
        <div className="search">
                <label htmlFor="search" className="search__lable">Поиск:</label>
                <input
                        type="text"
                        id="search"
                        className="search__input"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => onHandleSearch(e)}
                        />
        </div>
        );
}
export default Search;
