import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

interface Props {
  selected: boolean;
  searchHandle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<Props> = ({ selected, searchHandle }) => {
  const { handleFilterByTitle } = useContext(StoreContext);
  const navigate = useNavigate();
  const inputRef2 = useRef<HTMLInputElement>(null);
  return (
    <>
      <i
        className={`fa-solid fa-x fa-2x custom-display-x ${
          selected == true
            ? `d-block animate__fadeIn animate__animated `
            : `d-none`
        }`}
        onClick={() => [searchHandle(false)]}
      ></i>
      <form
        className={`custom-search-form ${
          selected == true
            ? `d-flex animate__animated animate__fadeIn`
            : `d-none`
        }`}
        onSubmit={(event: React.FormEvent<HTMLFormElement>)=> {
          event.preventDefault()
          if(inputRef2.current){
            navigate(`/SearchPage`)
            handleFilterByTitle(inputRef2.current.value);
          }
          if (inputRef2.current) {
                  inputRef2.current.value = ``;
                }
        }}
      >
        <input
          ref={inputRef2}
          className="form-control w-75"
          style={{
            border: `1px solid #fff`,
            borderRadius: `15px`,
            outline: `none`,
            boxShadow: `none`,
          }}
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </>
  );
};

export default Search;
