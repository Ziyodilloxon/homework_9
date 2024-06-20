import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaUserLarge } from "react-icons/fa6";

function Dashboard() {
  const { user } = useGlobalContext();
  console.log(user);
  const phoneNumber = () => {
    if (user.phoneNumber) {
      return <h2>{user.phoneNumber}</h2>;
    } else {
      return <p>You don't have a phone number!</p>;
    }
  };
  const photoURL = () => {
    if (user.photoURL) {
      return <img src={user.photoURL} alt="User" />;
    } else {
      return (
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt="Avatar"
        />
      );
    }
  };
  return (
    <>
      <h1 className="font-black text-5xl">Your profile</h1>
      <div className="card w-96 h-4/5 glass mt-12">
        <div className="avatar">
          <div className="w-24 rounded-full ml-9 mt-4 ring ring-primary ring-offset-base-100 ring-offset-2">
            {photoURL()}
          </div>
        </div>
        <div>
          <h3>{user.displayName}</h3>
        </div>
        <div>
          <h3 className="tracking-widest ml-9 mt-4">Phone number :</h3>
          <h2 className="tracking-widest ml-9 mt-2">{phoneNumber()}</h2>
        </div>
        <div>
          <h3 className="tracking-widest ml-9 mt-4">Gmail :</h3>
          <h2 className="tracking-widest ml-9 mt-2">{user.email}</h2>
        </div>
        <div>
          <h4 className="tracking-widest ml-9 mt-4">About me :</h4>
          <p className="tracking-widest ml-9 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae
            <br /> nemo, reprehenderit facere earum <br /> qui.
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
