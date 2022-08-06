import React from 'react'
import { getProjectListingPageSlug } from '../../adapters/contentful/contentful.adapter'
import ProjectListingPage from '../../containers/ProjectListingPage'
import constants from '../../constants'

export const getStaticPaths = async () => {
  let pathArray = []

  const projectListingPageSlug = await getProjectListingPageSlug()

  pathArray = pathArray.concat([
    ...projectListingPageSlug.items
      .filter((item) => Boolean(item?.fields?.group))
      .map((item) => ({
        params: {
          group: item?.fields?.group,
          lang: constants.lang,
        },
      })),
  ])

  console.info(pathArray)

  return {
    paths: pathArray,
    fallback: false,
  }
}

export const getStaticProps = async ({ params, preview }) => {
  return {
    props: {},
  }
}

const groupPages = (props) => {
  return <ProjectListingPage />
}

export default groupPages
