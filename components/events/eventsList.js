import React from "react";

import Event from "./event";

class EventsList extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <ul className="list-unstyled">
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </ul>
      </div>
    );
  }
}

export default EventsList;
