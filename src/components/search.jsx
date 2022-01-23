const Search = ({onHandleSearch, onHandleSubmit, value}) => {
        return (
          //   <div class="input-group">
          //     <input
          //       type="search"
          //       class="form-control rounded"
          //       placeholder="Search"
          //       aria-label="Search"
          //       aria-describedby="search-addon"
          //     />
          //     <button type="button" class="btn btn-outline-primary" onClick={onHandleSubmit}>search</button>
          //   </div>
          // <div className="search">
          <form className="input-group" onSubmit={(e) => onHandleSubmit(e)}>
            <input
              type="text"
              id="search"
              className="form-control rounded"
              placeholder="Search"
              value={value}
              onChange={(e) => onHandleSearch(e)}
            />
            <input type="submit" value="Search" className="btn btn-outline-secondary shadow-none"/>
          </form>
        );
}
export default Search;
