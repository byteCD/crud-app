import { Container, Row, Col } from "react-bootstrap/";
import AddUserForm from "../components/AddUserForm/AddUserForm";
import UsersTable from "../components/UsersTable/UsersTable";
import userService from "../services/UserService";
import styles from "../styles/Home.module.css";

const Home = ({ users }) => {
  return (
    <div className={styles.Home}>
      <Container>
        <Row>
          <Col>
            <AddUserForm />
            <UsersTable users={users} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const users = await userService.getUsers();

  return {
    props: { users },
  };
}
