import { useContext, useState } from "react";

import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";
import { ReactComponent as CrossIcon } from "../../../assets/svg/cross.svg";
import { PostsContext } from "../../../context/posts";
import Input from "../../form/input/input";

import './menuSearch.scss';

const MenuSearch = () => {
  const [ showSearch, setShowSearch ] = useState(false);
  const { search, setSearch } = useContext(PostsContext);

  console.log(search)

  return (
    <div className="menu-search">
      { !showSearch && <SearchIcon onClick={() => { setShowSearch(true) }} /> }
      { showSearch && (
        <div className="menu-search-input__container">
          <Input autoFocus noPadding value={search} onChange={setSearch} />
          <CrossIcon onClick={() => {
            setShowSearch(false);
            setSearch('');
          }} />
        </div>
      ) }
    </div>
  )
}

export default MenuSearch;
