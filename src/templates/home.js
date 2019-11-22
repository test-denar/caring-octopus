import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div className="wrapper">
                    <div className="inner">
                        {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                            let GetSectionComponent = components[_.get(section, 'component')];
                            return (
                                <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                            )
                        })}
                    </div>
                </div>
            </Layout>
        );
    }
}
