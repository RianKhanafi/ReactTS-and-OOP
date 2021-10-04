interface Crouses {
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
}

interface ICourses {
  courses: Courses[];
}
