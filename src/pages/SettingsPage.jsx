import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

function SettingsPage() {
  const {user} = useContext(UserContext)

  if (!user?.isAdmin) return <Navigate to={"/error"} />

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div>Settings</div>
    </>
  );
}

export default SettingsPage;
