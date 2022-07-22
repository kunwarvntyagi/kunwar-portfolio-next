import React from 'react'
import { getHomePageSlug } from '../../adapters/contentful/contentful.adapter'
import constants from '../../constants'
import HomePage from '../../containers/HomePage/index'

export const getStaticPaths = async () => {
  let pathArray = []

  const homePageSlug = await getHomePageSlug()

  pathArray = pathArray.concat([
    ...homePageSlug.items
      .filter((item) => Boolean(item?.fields?.slug))
      .map((item) => ({
        params: {
          parent: item?.fields?.slug,
          lang: constants.lang,
        },
      })),
  ])

  return {
    paths: pathArray,
    fallback: false,
  }
}

export const getStaticProps = async ({ params, preview }) => {
  return {
    props: {
      homePageData: {},
    },
  }
}

const langPages = (props) => {
  const { homePageData } = props
  return <HomePage data={homePageData} />
}

export default langPages
