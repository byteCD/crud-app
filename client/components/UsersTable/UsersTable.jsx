import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import EditUserModal from "../EditUserModal/EditUserModal";
import userService from "../../services/UserService";
import styles from "./UsersTable.module.css";

const UsersTable = ({ users }) => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState({});

  const getUser = async (id) => {
    const user = await userService.getUser(id);

    setUser(user);
    setModalShow(true);
  };

  const deleteUser = async (id) => {
    await userService.deleteUser(id).then(() => router.push("/"));
  };

  return (
    <>
      <EditUserModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
      />

      <div
        className={styles.UsersTable}
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        {users.length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Имя пользователя</th>
                <th>Почта</th>
                <th>Роль</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button
                      className={styles.UsersTable__btn}
                      variant="primary"
                      onClick={() => getUser(user._id)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      Удалить
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default UsersTable;
