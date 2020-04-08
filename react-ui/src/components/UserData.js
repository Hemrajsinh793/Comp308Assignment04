import React, { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
/////////////
function UserData() {
  const [userValues, setValues] = useState({
    sepalLength: "",
    sepalWidth: "",
    petalLength: "",
    petalWidth: "",
    epochs: "",
    learningRate: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const [data, setData] = useState({});
  const [output, setOutput] = useState(false);
  const apiUrl = "http://localhost:3000/myInput";

  const runUserModel = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      sepalLength: userValues.sepalLength,
      sepalWidth: userValues.sepalWidth,
      petalLength: userValues.petalLength,
      petalWidth: userValues.petalWidth,
      epochs: userValues.epochs,
      learningRate: userValues.learningRate,
    };
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);

        setData(result.data);
        setOutput(true);
      })
      .catch((error) => setShowLoading(false));
  };
  const onChange = (e) => {
    e.persist();
    setValues({ ...userValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      )}
      <center>
      <b>
        <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
          {" "}
          Enter Details:
        </h1>
      </b>
      </center>
      <center>
        <Jumbotron
          style={{
            padding: 0,
            width: "50%",
            marginTop: "23px",
            background: "light-blue",
          }}
        >
          <Form onSubmit={runUserModel}>
            <Form.Group><br/>
            
              <tr><td>
              <b>
                <Form.Label> Sepal Length: </Form.Label>
              </b></td>
              <td>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                name="sepalLength"
                id="sepalLength"
                placeholder="Enter Sepal Length"
                value={userValues.sepalLength}
                onChange={onChange}
              />
              </td>
              </tr>
            </Form.Group>
           
            <Form.Group>
              <tr>
                <td>
              <b>
                <Form.Label> Sepal Width:</Form.Label>
              </b></td>
              <td>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                name="sepalWidth"
                id="sepalWidth"
                placeholder="Enter sepal width"
                value={userValues.sepalWidth}
                onChange={onChange}
              />
              </td>
              </tr>
            </Form.Group>

            <Form.Group>
              <tr>
                <td>
              <b>
                <Form.Label> Petal Length:</Form.Label>
              </b>
              </td>
              <td>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                name="petalLength"
                id="petalLength"
                placeholder="Enter petal Length"
                value={userValues.petalLength}
                onChange={onChange}
              />
              </td>
              </tr>
            </Form.Group>

            <Form.Group>
              <tr>
                <td>
              <b>
                {" "}
                <Form.Label> Petal Width:</Form.Label>{" "}
              </b>
              </td>
              <td>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                name="petalWidth"
                id="petalWidth"
                placeholder="Enter petal Width"
                value={userValues.petalWidth}
                onChange={onChange}
              />
              </td>
              </tr>
            </Form.Group>

            <Form.Group>
              <tr>
                <td>
              <b>
                {" "}
                <Form.Label> Epoch:</Form.Label>{" "}
              </b>
              </td>
              <td>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                name="epochs"
                id="epochs"
                placeholder="Enter epochs"
                value={userValues.epochs}
                onChange={onChange}
              />
              </td>
              </tr>
            </Form.Group>

            <Form.Group>
              <tr>
                <td>
              <b>
                {" "}
                <Form.Label> Learning Rate:</Form.Label>{" "}
              </b>
              </td>
              <td>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                name="learningRate"
                id="learningRate"
                placeholder="Enter learning rate"
                value={userValues.learningRate}
                onChange={onChange}
              />
              </td>
              </tr>
            </Form.Group>
            <tr>
              <td colSpan="2">
            <Button
              style={{ backgroundColor: "blue", width: "150%", color: "white" }}
              variant="primary"
              type="submit"
            >
              Predict
            </Button>
            </td>
            </tr>
          </Form>
        </Jumbotron>
      </center>

      <center>
        {output && !showLoading && (
          <Table
            style={{ paddingLeft: "50px", width: "80%" }}
            striped
            bordered
            variant="dark"
            responsive="lg"
          >
            <thead>
              <tr>
                <th>Types</th>
                <th>Prediction Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Setosa</td>
                <td>{data.row1[0]}</td>
              </tr>
              <tr>
                <td>virginica</td>
                <td>{data.row1[1]}</td>
              </tr>
              <tr>
                <td>Versicolor</td>
                <td>{data.row1[2]}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </center>
    </div>
  );
}
export default UserData;
