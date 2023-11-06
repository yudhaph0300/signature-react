import { useState } from "react";

// Firebase
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update Display
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      toast.error("Could not update profile details");
    }
  };
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="card p-3 shadow-lg">
          <div className="card-body">
            <div style={{ float: "left" }}>
              <p className="card-title fw-bold">Personal profile</p>
            </div>
            <div style={{ float: "right" }}>
              <button
                className="btn btn-link fw-bold"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setChangeDetails((prevState) => !prevState);
                }}
              >
                {changeDetails ? "Cancel" : "Change"}
              </button>
            </div>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="small"></label>
                <input
                  type="text"
                  className="form-control small p-3"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  disabled={!changeDetails}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="small"></label>
                <input
                  type="text"
                  className="form-control small p-3"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  disabled
                  onChange={onChange}
                />
              </div>
            </form>
            {changeDetails && (
              <button
                className="btn btn-success mt-3 btn-lg w-100"
                onClick={() => {
                  onSubmit();
                  setChangeDetails((prevState) => !prevState);
                }}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
