import React from 'react';

export default class Contact extends React.Component {
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
                        <input placeholder="Guy Person"/>
                    </div>
                    <div>
                        <span>Email</span>
                        <input placeholder="test@gmail.com"/>
                    </div>
                    <div>
                        <span>Message</span>
                        <textarea placeholder="You are a cool guy!"/>
                    </div>
                    <section className="submit"><span>Submit</span></section>
                </form>
            </div>
        );
    }
}