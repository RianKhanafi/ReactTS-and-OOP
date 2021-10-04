import HTTPClient from "../../config/axios";

class Crouses extends HTTPClient {
  public constructor() {
    super();
  }

  public getAllCourses = () => this.instance.get<ICourses>("/courses");

  public details = (id: number) => {
    return this.instance
      .get<Courses<{}>>(`/courses/${id}`)
      .then((res) => res.data);
  };

  // join: (id) => axios.post("/my-courses", { course_id: id }),
  public mine = () => {
    return this.instance.get<any>("/my-courses");
  };
}

export default Crouses;
export const courses = new Crouses();
