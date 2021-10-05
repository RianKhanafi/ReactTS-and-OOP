import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Youtube from "react-youtube";
import { courses } from "../constants/api/courses";
import SidebarClass from "../parts/SidebarClass";
import { selectCourse, setWatch } from "../redux/features/courses";
import { useAppDispatch, useAppSelector } from "../redux/hooks";



const DetailClass: React.FC<RouteComponentProps<any>> = ({
  match,
  history,
}) => {
  const dispatch = useAppDispatch();

  const COURSES = useAppSelector(selectCourse);

  useEffect(() => {
    window.scroll(0, 0);

    courses
      .details(match.params.class)
      .then((res: any) => {
        console.log(res);
        if (res.chapters.length === 0)
          throw new Error("Class minght be not ready yet");
        else dispatch(setWatch(res));
      })
      .catch((error) => {
        // dispatch(messageCourses(error?.response?.data?.message ?? "Error"));
      });
  }, [match.params.class, dispatch]);

  //   if (COURSES.status === "loading") return <Loading></Loading>;
  //   if (COURSES.status === "error")
  //     return <Centered>{COURSES?.message?.error ?? "Error"}</Centered>;

  let currentChapter, currentLessaion;

  if (COURSES.courses[match.params.class]) {
    currentChapter =
      COURSES.courses[match.params.class]?.chapters?.find(
        (chapter: any) => +chapter.id === +match.params.id
      ) ?? COURSES.courses[match.params.class]?.chapters[0];

    currentLessaion =
      currentChapter?.lessions?.find(
        (lession: any) => lession.video === match.params.uid
      ) ?? currentChapter?.lessions?.[0];
  }

  const nextVideo = () => {};
  
  return (
    <div className="flex">
      {COURSES.courses?.[match.params.class]?.chapters?.length > 0 && (
        <>
          <SidebarClass
            data={COURSES.courses[match.params.class]}
            defaultUri={`/courses/${match.params.class}/${currentChapter?.id}/${currentLessaion?.video}`}
          />
          <main className="flex-1">
            <div className="px-16">
              <section className="flex flex-col mt-8">
                <h1 className="text-4xl text-gray-900 font-medium">
                  {currentLessaion?.name ?? "Lession Name"}
                </h1>

                <p className="text-lg text-gray-600">
                  Materi bagian dari {currentLessaion?.name ?? "Lession"}
                </p>
              </section>

              <section className="flex flex-col mt-8">
                <div className="flex jhustify-start items-center -mx-4">
                  <div className="w-full px-4">
                    <div className="relative">
                      <div className="video-wrapper">
                        {currentLessaion?.video && (
                          <Youtube
                            videoId={currentLessaion?.video}
                            id={currentLessaion?.video}
                            opts={{
                              playerVars: {
                                autoplay: 1,
                                controls: 1,
                                showinfo: 0,
                                rel: 0,
                              },
                            }}
                            onEnd={nextVideo}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default DetailClass;
