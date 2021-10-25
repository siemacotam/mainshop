import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import { itemsPerPage } from "../Shop";

const Pagination = ({ itemsArray }) => {
  const [numberOfPages, setNumberOfPages] = useState(1);
  const { category, activePage, setActivePage } = useContext(StoreContext);

  const howManyPages = Math.ceil(itemsArray.length / itemsPerPage);

  useEffect(() => {
    const pagesCount = howManyPages;
    setNumberOfPages(pagesCount);
    setActivePage(1);
    console.log(pagesCount, howManyPages, numberOfPages);
  }, [category]);

  const pageEl = (numb) => {
    return (
      <li
        className={"page-item " + (numb === activePage && "active")}
        onClick={() => {
          document.getElementById("okruszki").scrollIntoView();
          setActivePage(numb);
        }}
      >
        <button to="/shop" className="page-link">
          {numb}
        </button>
      </li>
    );
  };

  const numbOfPages = () => {
    let pagesArray = [];
    const pagesCount = howManyPages;
    if (itemsArray.length > 0) {
      for (let i = 0; i < pagesCount; i++) {
        pagesArray.push(pageEl(i + 1));
      }
    }
    return pagesArray.map((i) => i);
  };

  const prevButton = (
    <li className="page-item">
      <button
        className="page-link"
        disabled={activePage === 1}
        onClick={() => {
          document.getElementById("okruszki").scrollIntoView();
          setActivePage((prev) => prev - 1);
        }}
      >
        Previous
      </button>
    </li>
  );

  const nextButton = (
    <li className="page-item">
      <button
        className="page-link"
        disabled={activePage === howManyPages}
        onClick={() => {
          document.getElementById("okruszki").scrollIntoView();
          setActivePage((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </li>
  );

  return (
    <ul className="pagination">
      {prevButton}
      {numbOfPages()}
      {nextButton}
    </ul>
  );
};

export default Pagination;
