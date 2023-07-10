import React, { useState } from "react";

const Create = () => {

    const [users , setUsers] = useState({});

    const getUserData = (e) => {
        setUsers({...users, [e.target.name ]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users)
    }
  return (
    <div className="container w-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" onChange={getUserData}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" onChange={getUserData} />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" name="number" onChange={getUserData}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" value="Male" name="gender"onChange={getUserData} />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" value="Female" name="gender"onChange={getUserData} />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
