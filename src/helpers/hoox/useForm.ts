import { useState } from "react";
import { IState } from "../../views/addNews";

export default (initialvalue: {}) => {
  const [state, setState] = useState<any>(initialvalue);

  return [
    state,
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    },
    (newState: any) => {
      setState({
        ...state,
        ...newState,
      });
    },
  ];
};
