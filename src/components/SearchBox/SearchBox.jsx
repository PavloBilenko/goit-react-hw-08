import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilter } from '../../redux/filters/slice';

function SearchBox() {
  const filter = useSelector((state) => state.filters.search);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };
  return (
    <div className={s.wraper}>
      <label className={s.label}>
        <p className={s.text}>Find contacts by name</p>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
export default SearchBox;
