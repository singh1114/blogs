import React, { Fragment } from "react"
import { css, Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          })}
        >
    <Styled.a key="about-header" css={css({
      boxShadow: `none`,
      textDecoration: `none`,
      color: `primary`,})} href="https://ranvir.xyz/blog/about/">
      <Styled.h3 css={css({
        my: 0,
        fontSize: 3
      })}>
        About
      </Styled.h3>
    </Styled.a>
    <Styled.a key="subscribe-header" css={css({
      boxShadow: `none`,
      textDecoration: `none`,
      color: `primary`,
    })} href="https://ranvir.xyz/blog/subscribe/">
      <Styled.h3 css={css({
        my: 0,
        fontSize: 3
      })}>
        &nbsp;&nbsp;&nbsp;Subscribe
      </Styled.h3>
    </Styled.a>
    </div>
    </div>
  </Fragment>
)