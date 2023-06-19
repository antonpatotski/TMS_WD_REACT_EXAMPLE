import { ReactComponent as UserIcon } from "../../../assets/svg/user.svg";

import './userProfile.scss';
const UserProfile = ({ user = {} }) => {
  return (
    <div className="userProfile">
      { user.firstName ? (
        <>
          <p className="userProfile__initials">
            { user?.firstName[0] }
            { user?.lastName[0] }
          </p>
          <p className="userProfile__full-name">
            { `${user.firstName} ${user.lastName}` }
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
