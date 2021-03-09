import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ( { sections} ) => (
            <div className="directory-menu">
              <Route>
                {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
                }
                </Route>
            </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);