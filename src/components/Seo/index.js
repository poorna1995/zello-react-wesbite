import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Seo = ({ title, image, keywords, description, lang, meta, site }) => {
  const metaDescription =
    "Surprise your friends and families by sending photos directly to their home screens. Download Zello and turn your phone screens into a chatroom of albums."; //description;
  // const defaultTitle = title;
  const ogDesc =
    "Send & receive photos on your home screens with Zello photo widgets! Download the app and experience a new way of sharing memories.";
  const titleTag = "Zello - Photo Widget Sharing App";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: titleTag,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: titleTag,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
