import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class Features extends React.Component {
    render() {
        return (
            <section className="main">
                <header className="major">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </header>
                <div className="features">
                    {_.map(_.get(this.props, 'section.features'), (feature, feature_idx) => (
                        <section key={feature_idx}>
                            <span className={'icon ' + _.get(feature, 'icon') + ' major ' + _.get(feature, 'icon_accent_color')}/>
                            <h3>{_.get(feature, 'title')}</h3>
                            {markdownify(_.get(feature, 'subtitle'))}
                        </section>
                    ))}
                </div>
            </section>
        );
    }
}
