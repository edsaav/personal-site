import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Illustration = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={data => {
      console.log(data);
      const image = data.images.edges.find(n => {
        return n.node.name === props.name;
      });
      console.log(image);
      if (!image) {
        return null;
      }

      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Illustration;