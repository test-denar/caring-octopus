import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="main accent2">
                <header className="major">
                    <h2>{_.get(this.props, 'pageContext.site.data.footer.contact.title')}</h2>
                    {markdownify(_.get(this.props, 'pageContext.site.data.footer.contact.subtitle'))}
                </header>
                <form method="post" action="#" className="combined">
                    <input type="email" name="email" id="email" placeholder="Email address" className="invert" />
                    <input type="submit" className="primary" value="Sign Up" />
                </form>
            </section>
        );
    }
}
