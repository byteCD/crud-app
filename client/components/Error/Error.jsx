import { Alert } from "react-bootstrap";

const Error = ({ error }) => {
  return (
    <div className="Error">
      <Alert variant="danger">{error}</Alert>
    </div>
  );
};

export default Error;
