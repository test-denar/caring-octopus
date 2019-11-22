import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link, safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div className="wrapper">
                    <div className="inner">
                        <section className="main">
                            <header className="major">
                                <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                                {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                            </header>
                            {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                                <Link to="#" className="image main"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt="" /></Link>
                            }
                            {htmlToReact(_.get(this.props, 'pageContext.html'))}
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}
