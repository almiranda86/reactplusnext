import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'

export default class Page1 extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return ( <div id="who">
     <div className="row">
         <div className="col-sm-4">
             <div className="cImage">
                 <img src="https://via.placeholder.com/728x750.png?text=Image1" />
             </div>
         </div>
         <div className="col-sm-8">
             <article>
                 <h3>
                     <FormattedMessage id="page1.titulo" />
                 </h3>
                 <span>
                     <p><FormattedMessage id="page1.p1" /></p>
                     <p><FormattedMessage id="page1.p2" /></p>
                     <p><FormattedMessage id="page1.p3" /></p>
                     <p><FormattedMessage id="page1.p4" /></p>
                     <p><FormattedMessage id="page1.p5" /></p>
                     <p><FormattedMessage id="page1.p6" /></p>
                 </span>
             </article>
         </div>
     </div>
 </div>

    );
  }
}