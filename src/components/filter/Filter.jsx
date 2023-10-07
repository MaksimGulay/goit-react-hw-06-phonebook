// Filter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterContainer, Label, Input } from './filter-style';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <FilterContainer>
      <Label>Find contact by name</Label>
      <Input
        type="text"
        name="Find contact by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
