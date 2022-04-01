import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserList() {
  useEffect(() => {
    addUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(0);

  const addUsers = () => {
    setLoading(true);
    axios.get(`/api/users/${next}`).then(res => {
      console.log(res.headers.next);

      const addPages = Math.ceil(res.data.length / 15);
      users.pop();
      res.data.push({ id: "", login: "" });

      setUsers(users.concat(res.data));
      setNext(res.data.slice(-2)[0].id);
      setPages(pages + addPages);
      setLoading(false);
    });
  };

  const columns = [
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Login",
      accessor: "login"
    },
    {
      Header: "Details",
      accessor: "login",
      Cell: props => (
        <Link to={`/users/${props.value}`}>
          <FontAwesomeIcon icon="search" />
        </Link>
      )
    }
  ];

  return (
    <Container>
      <h1>Users</h1>
      <ReactTable
        data={users}
        columns={columns}
        defaultPageSize={15}
        showPageSizeOptions={false}
        showPageJump={false}
        pages={pages}
        loading={loading}
        renderTotalPagesCount={() => {
          return `${pages}...`;
        }}
        onPageChange={page => {
          if (page === pages - 1) {
            addUsers();
          }
        }}
      />
    </Container>
  );
}

export default UserList;
