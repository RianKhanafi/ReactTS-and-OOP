import axios from "axios";
import React, { useState } from "react";

export interface User {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

export interface IState {
  user: User[];
}

const News: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    title: "",
    body: "",
    userId: 0,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const addPeople = async () => {
    try {
      const data = await axios.post<User>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: userData.title,
          body: userData.body,
          userId: userData.userId,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.1/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </a>
      </nav>

      <div className="container">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <input
            type="text"
            name="body"
            className="form-control"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>User Id</label>
          <input
            type="number"
            name="userId"
            className="form-control"
            onChange={onChange}
          />
        </div>

        <button className="btn btn-primary" onClick={addPeople}>
          Add People
        </button>
      </div>
    </div>
  );
};

export default News;
