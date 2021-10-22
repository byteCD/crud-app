import axios from "axios";

class UserService {
  async getUsers() {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/`)
      .then((res) => res.data);
  }

  async getUser(id) {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${id}`)
      .then((res) => res.data);
  }

  async addUser(username, email, role) {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/add`,
      {
        username,
        email,
        role,
      }
    );
  }

  async editUser(id, username, email, role) {
    return await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/edit/${id}`,
      {
        username,
        email,
        role,
      }
    );
  }

  async deleteUser(id) {
    return await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/delete/${id}`
    );
  }
}

export default new UserService();
