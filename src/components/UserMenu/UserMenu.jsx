import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../..//redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.div}>
      <p className={s.text}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
