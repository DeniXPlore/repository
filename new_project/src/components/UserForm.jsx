import { useDispatch, useSelector } from "react-redux"
import UserSignupForm from "./UserSignupForm"
import { toggleForm } from "../features/user/userSlice"

const UserForm = () => {
  const dispatch = useDispatch()
  const {showForm} = useSelector(({user}) => user )
  const closeForm = () => {
    dispatch(toggleForm(false))}


  return (
    showForm ? (
    <>
    <div className="user-overlay" onClick={closeForm}/>
   <UserSignupForm closeForm={closeForm}/>
    </>): 
    <></>
  )
}
export default UserForm