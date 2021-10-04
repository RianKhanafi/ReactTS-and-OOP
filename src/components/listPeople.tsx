import React from "react";
import { Link } from "react-router-dom";
import { IState, User } from "../views/addNews";

interface ISprops {
  people: IState["user"];
  search: string | number;
  setPeopleData: React.Dispatch<React.SetStateAction<IState["user"]>>;
  deleteItems(id: number): void;
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
}

const ListPeople: React.FC<ISprops> = ({
  people,
  search,
  deleteItems,
  handleSearch,
}) => {
  const renderList = (): JSX.Element[] => {
    return people.map((elm: User, key: number) => (
      <li
        className="list-group-item d-flex flex-row justify-content-between"
        key={key}
      >
        <div className="d-flex flex-column">
          <strong>{elm.title}</strong>
          <div>{elm.body}</div>
        </div>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => deleteItems(Number(elm.id))}
          >
            X
          </button>
        </div>
      </li>
    ));
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to="/add-news">
          Add New
        </Link>
      </div>
      <input
        className="form-control my-5"
        value={search}
        placeholder="Search..."
        onChange={handleSearch}
      />
      <ul className="list-group">{renderList()}</ul>
    </div>
  );
};

export default ListPeople;
