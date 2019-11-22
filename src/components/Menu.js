import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, toUrl, classNames} from '../utils';

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <ul className="links">
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                        <li key={item_idx}><Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link></li>
                    ))}
                </ul>
                {_.get(this.props, 'pageContext.site.data.menu.actions') && 
                    <ul className="actions stacked">
                        {_.map(_.get(this.props, 'pageContext.site.data.menu.actions'), (action, action_idx) => (
                            <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(toUrl(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, 'fit', {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                        ))}
                    </ul>
                }
            </nav>
        );
    }
}
