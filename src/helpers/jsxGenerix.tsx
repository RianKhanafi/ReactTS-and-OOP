import React from "react";

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

const Example: React.FC = () => {
  return (
    <div>
      <Form<{ lastName: string | number }>
        values={{ lastName: "Rian Khanafi" }}
      >
        {(values) => <div>{values.lastName}</div>}
      </Form>
    </div>
  );
};
