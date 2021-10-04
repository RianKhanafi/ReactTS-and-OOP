import axios from "axios";
import React, { useEffect, useState } from "react";
import ListPeople from "../components/listPeople";
import Crouses from "../constants/api/courses";
import PeopleApi from "../constants/api/people";
import { IState, User } from "./addNews";

const People: React.FC = () => {
  const [peopleData, setPeopleData] = useState<IState["user"]>([]);
  const [search, setSearch] = useState<string | number>("");

  useEffect(() => {
    getPeople();
  }, []);

  const deleteItems = (id: number) => {
    setPeopleData(peopleData.filter((person: User) => person.id !== id));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let firsttimerender = true;

    setTimeout(() => {
      if (firsttimerender) {
        getPeople(search);
      }
    }, 1000);

    return () => {
      firsttimerender = false;
    };
  }, [search]);

  const getPeople = async (title?: number | string) => {
    try {
      const peopleApi = new Crouses();
      const data = await peopleApi.getAllCourses();

      //   setPeopleData(data);

      console.log(data);
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
        <ListPeople
          search={search}
          people={peopleData}
          setPeopleData={setPeopleData}
          deleteItems={deleteItems}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default People;
