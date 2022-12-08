/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";

import { orderCardsaction, filterCardsaction } from "../../redux/actions";

const Filter = (props) => {

    const dispatch = useDispatch();

    const handleChangeOrder = (event) => {
      const targetValue = event.target.value;

      dispatch(orderCardsaction(targetValue));
    };

    const handleChangeFilter = (event) => {
      const targetValue = event.target.value;

      dispatch(filterCardsaction(targetValue));
    };
  return (
    <div className={props.styles.filterOptions}>
      <label className={props.styles.labelId}>Filter for Card's ID :</label>
      <select
        name="order"
        className={props.styles.selectId}
        onChange={(e) => handleChangeOrder(e)}
      >
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      <label className={props.styles.labelgender}>
        Filter for Character's Gender:
      </label>
      <select
        name="gender"
        className={props.styles.selectGender}
        onChange={(e) => handleChangeFilter(e)}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unknow">Unknow</option>
        <option value="Genderless">Genderless</option>
      </select>
    </div>
  );
};

export default Filter;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
