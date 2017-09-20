import React from 'react';

import Request from '../../requests';

export default class Messages extends React.Component {

    constructor() {
        super();

        this.state = {
          messages: []
        };

        this.deleteMessage = this.deleteMessage.bind(this);
    }

    componentWillMount() {
        Request.getAllMessages((response) => {
            this.setState({
                messages: response.data
            });
        });
    }

    deleteMessage(message) {
        Request.deleteMessage(message, () => {
            var currentMessages = this.state.messages;
            currentMessages.splice(currentMessages.indexOf(message), 1);
            this.setState({
                messages: currentMessages
            });
        });
    }

    render() {
        return (
            <ul className="messages">
                <li className="messageHeading"><span>&mdash;Messages&mdash;</span></li>
                {
                    this.state.messages.map((message, index) => {
                      return <li key={index}
                                 onClick={() => {
                                     this.deleteMessage(message);
                                 }}
                             >
                                <div>
                                    <span>{message.name}</span>
                                    <span className="messageEmail">{message.email}</span>
                                </div>
                                <p>&emsp;&emsp;&emsp;{message.message}</p>
                             </li>
                    })
                }
            </ul>
        );
    }
}