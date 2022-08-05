import React from 'react'
import { getProjectDetailPageSlug } from '../../../adapters/contentful/contentful.adapter'
import ProjectDetailPage from '../../../containers/ProjectDetailPage'
// import constants from '../../../../constants'

export const getStaticPaths = async () => {
  let pathArray = []

  const projectDetailPageSlug = await getProjectDetailPageSlug()

  pathArray = pathArray.concat([
    ...projectDetailPageSlug.items
      .filter((item) => Boolean(item?.fields?.group))
      .map((item) => ({
        params: {
          group: item?.fields?.group,
          // lang: constants.lang,
          parent: item?.fields?.parent,
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
    props: {},
  }
}

const parentPages = (props) => {
  return <ProjectDetailPage />
}

export default parentPages
