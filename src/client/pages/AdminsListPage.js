import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
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
        list of admins
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admins: state.admins };
}

function loadData(store) {
  //returns a promise
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
  loadData
};
