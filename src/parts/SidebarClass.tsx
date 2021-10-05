import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../assets/images/icon-arrow-back.svg";

// all pf this using any
function SidebarClass({ match, data, defaultUri }:any) {
  const getNavLinkClass = (path: string) => {
    return match.url === path
      ? "text-teal-500"
      : "text-indigo-900";
  };

  const list:any = [];
  (data?.chapters ?? []).forEach((chapter:any, index:number) => {
    console.log("a", chapter);
    list.push(
      <li key={`${chapter.courses_id}-${index}`}>
        <span className="nav-header relative block py-3 px-5 bg-indigo-900 text-white text-left">
          {chapter?.name ?? "Chapter name"}
        </span>
      </li>
    );

    if (chapter?.lessions?.length > 0) {
      chapter?.lessions.forEach((lession:any, index2:number) => {
        list.push(
          <li key={`${chapter.courses_id}-${lession.id}-${index}`}>
            <Link
              className={[
                "relative flex items-center py-3 hover:text-white px-5 transition-all duration-200 w-full text-left truncate ...",
                getNavLinkClass(
                  `/courses/${data?.id}/${chapter?.id}/${lession.video}`
                ),
              ].join(" ")}
              to={`/courses/${data?.id}/${chapter?.id}/${lession.video}`}
            >
              {lession?.name ?? "Lession Name"}
            </Link>
          </li>
        );
      });
    }
  });

  return (
    <div>
      {/* sematic */}
      <aside
        className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto"
        style={{ width: 280 }}
      >
        <div
          className="max-h-screen h-screen fixed bg-indigo-1000 flex-col content-between"
          style={{ width: 280 }}
        >
          <ul className="main-menu mt-12">
            <li>
              <Link
                className="relative flex items-center py-3 px-5 w-full text-left text-white mb-12"
                to="/"
              >
                <ArrowBack className="fill-white mr-2"></ArrowBack>
                Back to home
              </Link>
            </li>
            {list}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default withRouter(SidebarClass);
