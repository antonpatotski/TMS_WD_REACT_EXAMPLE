import { ReactComponent as UserIcon } from "../../../assets/svg/user.svg";

import './userProfile.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchUser} from "../../../store/user";

const defaultUser = {
  userName: 'Antonio',
}

const UserProfile = () => {
  const { isLoggedIn, access } = useSelector(state => state.token);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUser(access))
    }
  }, [ isLoggedIn ])

  return (
    <div className="userProfile">
      { user?.userName ? (
        <>
          {/*<p className="userProfile__initials">*/}
          {/*  {defaultUser.userName}*/}
          {/*</p>*/}
          <p className="userProfile__full-name">
            { user.userName }
          </p>
        </>
      ) : (
        <button className="btn-custom">
          <UserIcon/>
        </button>
      ) }
    </div>
  )
}

export default UserProfile;
