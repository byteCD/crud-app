import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import userService from "../../services/UserService";
import styles from "./AddUserForm.module.css";
import Error from "../Error/Error";

const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Пользователь");
  const [error, setError] = useState("");
  const router = useRouter();

  const addUser = async () => {
    try {
      await userService
        .addUser(username, email, role)
        .then(() => router.push("/"));

      setError("");
      setUsername("");
      setEmail("");
      setRole("Пользователь");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className={styles.AddUserForm}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1>Добавить пользователя</h1>
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
          >
            <option>Пользователь</option>
            <option>Модератор</option>
            <option>Администратор</option>
          </Form.Select>
        </Form.Group>
        {error && <Error error={error} />}
        <Button variant="success" onClick={addUser}>
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default AddUserForm;
