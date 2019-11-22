import React from 'react';
import _ from 'lodash';

import {markdownify, getPages, safePrefix, Link} from '../utils';

export default class Spotlight extends React.Component {
    render() {
        return (
            <section className="main">
                <header className="major">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </header>
                <div className="spotlights">
                    {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home_sections.spotlight.enabled', true]), 'frontmatter.home_sections.spotlight.weight'), (page, page_idx) => (
                        <article key={page_idx}>
                            <div className="image"><img src={safePrefix(_.get(page, 'frontmatter.home_sections.spotlight.image.url'))} alt="" data-position={_.get(page, 'frontmatter.home_sections.spotlight.image.data_position')} /></div>
                            <div className="content">
                                <h3>{_.get(page, 'frontmatter.home_sections.spotlight.title')}</h3>
                                <p>{_.get(page, 'frontmatter.home_sections.spotlight.excerpt')}</p>
                                <ul className="actions special">
                                    <li><Link to={safePrefix(_.get(page, 'url'))} className="button primary">More</Link></li>
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}
