import React from 'react';

import Request from '../../requests';

export default class Contact extends React.Component {

    constructor() {
        super();

        this.state = {
            nameValue: "",
            emailValue: "",
            messageValue: "",
            noName: false,
            noEmail: false,
            noMessage: false
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage() {
        this.setState({
            noName: !this.state.nameValue,
            noEmail: !this.state.emailValue,
            noMessage: !this.state.messageValue
        }, () => {
            if(!this.state.noName && !this.state.noEmail && !this.state.noMessage) {
                var data = {
                    name: this.state.nameValue,
                    email: this.state.emailValue,
                    message: this.state.messageValue
                };
                Request.createMessage(data, () => {
                    this.setState({
                        nameValue: "",
                        emailValue: "",
                        messageValue: "",
                        noName: false,
                        noEmail: false,
                        noMessage: false
                    });
                    var inputs = document.getElementsByClassName("messageField");
                    for (var i = 0; i < inputs.length; i++) {
                        inputs[i].value = "";
                    }
                });
            }
        });
    }

    render() {
        return(
            <div className="contact">
                <div className="info">
                    <span>Cody Hege</span>
                    <span>dreamesquephotography@gmail.com</span>
                    <span>812-219-3836</span>
                </div>
                <form>
                    <div>
                        <span>Name</span>
                        <input className={this.state.noName ? "noInfo": "messageField"}
                               placeholder="Cody Hege"
                               onChange={(e) => {
                                   this.setState({
                                       nameValue: e.currentTarget.value
                                   });
                               }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <input className={this.state.noEmail ? "noInfo": "messageField"}
                               placeholder="dreamesquephotography@gmail.com"
                               onChange={(e) => {
                                   this.setState({
                                       emailValue: e.currentTarget.value
                                   });
                               }}
                        />
                    </div>
                    <div>
                        <span>Message</span>
                        <textarea className={this.state.noMessage ? "noInfo": "messageField"}
                                  placeholder="I would like to schedule a photo shoot!"
                                  onChange={(e) => {
                                      this.setState({
                                          messageValue: e.currentTarget.value
                                      });
                                  }}
                        />
                    </div>
                    <section className="submit"
                             onClick={() => {
                                this.submitMessage();
                             }}
                    >
                        <span>Submit</span>
                    </section>
                </form>
            </div>
        );
    }
}