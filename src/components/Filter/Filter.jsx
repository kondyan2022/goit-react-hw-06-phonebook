import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

import FilterLabel from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    if ((evt.target.name = 'filter')) {
      dispatch(setFilter(evt.target.value));
    }
  };
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};

export default Filter;
