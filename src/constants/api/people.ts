import HTTPClient from "../../config/axios";
import { IState } from "../../views/addNews";

class PeopleApi extends HTTPClient {
  constructor() {
    super();
  }

  public getPeople = () => this.instance.get<IState["user"]>("/courses");
}

export default PeopleApi;
