import React, { useEffect } from "react";
import { courses } from "../constants/api/courses";
import ListClassItem from "../parts/ListClassItem";
import Sidebar from "../parts/Sidebar";
import { selectCourse, setCourses } from "../redux/features/courses";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const COURSES = useAppSelector(selectCourse);

  useEffect(() => {
    courses.mine().then((response) => {
      dispatch(setCourses({courses: response.data}));
    });
  }, [dispatch]);

  

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1">
        <div className="px-16">
          {/* {COURSES.status === "loading" && <Loading />}
          {COURSES.status === "error" && COURSES.message}
          {COURSES.status === "ok" &&
            (COURSES.total > 0 ? ( */}

          {COURSES.count ? (
            <>
              <section className="flex flex-col mt-8">
                <h1 className="text-4xl text-gray-900 font-medium">My Class</h1>
                <p className="text lg text gray-600">
                  Continue learning to pursue your dreams
                </p>
              </section>

              <section className="flex flex-col mt-8">
                <div className="flex justify-start items-center -mx-4">
                  {Object.values(COURSES.courses).map((item, index) => {
                    return <ListClassItem key={index} data={item.course} />;
                  })}
                </div>
              </section>
            </>
          ) : (
            "Empty"
          )}
          {/* ) : ( */}
          {/* <EmptyState /> */}
          {/* ))} */}
        </div>
      </main>
    </div>
  );
};

export default Home;
