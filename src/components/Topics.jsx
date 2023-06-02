import React from "react";
import { useLocation } from "react-router-dom";
import { useMatch, useMatches, usehref } from "react-router-dom";
import { Link, Route, Routes, useParams } from "react-router-dom";


const Topic = ({ match }) => {
  const location = useLocation();
  console.log("Topic location", location);
  return (
    <code>
      <pre>Topic: {JSON.stringify(location, null, 4)}</pre>
    </code>
  );
};

const Topics = (props) => {
  const params = useParams();
  const location = useLocation();

  return (
    <div>
      <h2>Topics</h2>
      <h2>props {JSON.stringify(props, null, 4)}</h2>
      <h2>params {JSON.stringify(params, null, 4)}</h2>
      <ul>
        <li>
          <Link to={`rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`components`}>Components</Link>
        </li>
        <li>
          <Link to={`props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Routes>
        <Route path={`:topicId`} element={<Topic/>} />
        <Route
          exact
          index
          element={
            <h3>
              Please select a topic. <br />
              only show WHEN exact path={location.pathname}
            </h3>
          }
        />
      </Routes>
    </div>
  );
};

export default Topics;
