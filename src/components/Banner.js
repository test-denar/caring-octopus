import React from 'react';
import _ from 'lodash';

import {markdownify, Link, toUrl, safePrefix, classNames} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="items">
                    {_.map(_.get(this.props, 'pageContext.frontmatter.banner.items'), (item, item_idx) => (
                        <section key={item_idx} className={_.get(item, 'accent_color')}>
                            <h1>{_.get(item, 'title')}</h1>
                            {markdownify(_.get(item, 'subtitle'))}
                            {_.get(item, 'action') && 
                                <ul className="actions special">
                                    <li><Link to={(_.get(item, 'action.url').startsWith('#') ? _.get(item, 'action.url') : safePrefix(toUrl(this.props.pageContext.pages, _.get(item, 'action.url'))))} className={classNames('button', {'primary': _.get(item, 'action.is_primary')}, {'scrolly': _.get(item, 'action.is_scrolly')})}>{_.get(item, 'action.label')}</Link></li>
                                </ul>
                            }
                        </section>
                    ))}
                </div>
                <div className="slider">
                    {_.map(_.get(this.props, 'pageContext.frontmatter.banner.slider'), (slide, slide_idx) => (
                        <article key={slide_idx}>
                            <img src={safePrefix(_.get(slide, 'img_path'))} alt="" data-position={_.get(slide, 'data_position')} />
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}
