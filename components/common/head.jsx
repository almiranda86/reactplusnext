import React from 'react'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'

const Head = (props) => {

    const{
        lang,
        intl
    } = props;

    return(
        <Helmet>
            <html lang={lang} />               
            <title>{intl.formatMessage({ id: "site.titulo" })}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" /> 
            <meta name="keywords" content="" /> 
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            <script src="../scripts/masks.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="static/styles/responsive.css" rel="stylesheet" />
            <link href="static/styles/style.css" rel="stylesheet" />
        </Helmet>
    );
}
 
export default injectIntl(Head)
