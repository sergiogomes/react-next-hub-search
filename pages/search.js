import React from "react";

import { getSearchUsers } from "../actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { usersData } = this.props;
    return (
      <>
        <h1>Search</h1>
        {JSON.stringify(usersData, null, 2)}
      </>
    );
  }
}

export default Search;

export async function getStaticProps({ params }) {
  console.log(params);
  const usersData = await getSearchUsers(params);
  return {
    props: {
      usersData,
    },
  };
}
