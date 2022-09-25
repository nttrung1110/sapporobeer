import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("input", {
          active: showSearchInput && "active",
        })}
        type="text"
        placeholder="検索キーワード"
      />
      <button
        className={cx("button")}
        onClick={() => setShowSearchInput((prev) => !prev)}
      />
    </div>
  );
};

export default Search;
