import React from "react"
import { FormattedMessage } from 'react-intl'

const Menu = ({title, description, collapse, collapseTarget, menuTitle, list}) => (
    <article>
        <h5>
            <FormattedMessage id={ title } />
        </h5>
        <span>
            <FormattedMessage id={ description } />
        </span>
        <br />        
    </article>
);


export default Menu;
