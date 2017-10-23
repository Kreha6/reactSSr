import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  // head() {
  //   return (
  //     <Helmet>
  //       <title>{`${this.props.users.length} Users Loaded`}</title>
  //       <meta property="og:title" content="Users App" />
  //     </Helmet>
  //   );
  // }

  render() {
    return (
      <div>
        {/* {this.head()} */}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  //returns a promise
  return store.dispatch(fetchUsers());
}
export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);
