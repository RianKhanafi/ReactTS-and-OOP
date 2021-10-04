import HTTPClient from "../../config/axios";

class Crouses extends HTTPClient {
  public constructor() {
    super();
  }

  public getAllCourses = () => this.instance.get<ICourses>("/courses");
}

export default Crouses;
