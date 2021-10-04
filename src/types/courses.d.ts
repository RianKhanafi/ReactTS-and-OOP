interface Courses<T> {
  id?: number;
  name: string;
  thumbnail: string;
  type: string;
  status: string;
  price: number;
  level: string;
  description?: string;
  mentor_id: number;
  created_at?: string;
  updated_at?: string;
  courses: T;
}

interface ICourses {
  courses: Courses[];
}
