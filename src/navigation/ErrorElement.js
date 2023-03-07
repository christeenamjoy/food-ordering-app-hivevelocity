import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      {status} {statusText}
    </div>
  );
};

export default ErrorElement;
