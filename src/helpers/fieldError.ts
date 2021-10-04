export default (errors: Array<any>) => {
  //   console.log(errors.response);
  const fieldErrors =
    typeof errors === "object" &&
    errors?.reduce((listErrors: any, error: { field: string | number }) => {
      if (error?.field) listErrors[error.field] = error;
      return listErrors;
    }, {});

  return fieldErrors;
};
