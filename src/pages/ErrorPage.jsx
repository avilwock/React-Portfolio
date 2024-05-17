//creates the error component and calls in as useRouteError
import { useRouteError } from 'react-router-dom';

//creates the error page
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  //if the wrong link is used, an error page appears
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
