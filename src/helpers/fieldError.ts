interface IError<T> {
  field: T;
}

export default <T extends {}>(errors: IError<T>[]) => {
  const fieldErrors =
    typeof errors === "object" &&
    errors?.reduce((listErrors: any, error) => {
      if (error?.field) listErrors["a"] = error;
      return listErrors;
    }, {});

  return fieldErrors;
};
