import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import userService from "../../services/UserService";
import Error from "../Error/Error";

const EditUserForm = ({ user, onHide }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [error, setError] = useState("");
  const router = useRouter();

  const editUser = async () => {
    try {
      await userService
        .editUser(user._id, username, email, role)
        .then(() => router.push("/"));

      onHide();
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="EditUserForm">
      <Form>
        <Form.Group>
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Почта</Form.Label>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Роль</Form.Label>
          <Form.Select
            className="mb-3"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option>Пользователь</option>
            <option>Модератор</option>
            <option>Администратор</option>
          </Form.Select>
        </Form.Group>
        {error && <Error error={error} />}
        <Button variant="success" onClick={editUser}>
          Редактировать
        </Button>
      </Form>
    </div>
  );
};

export default EditUserForm;
