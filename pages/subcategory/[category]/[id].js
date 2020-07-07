import React from "react"
import regeneratorRuntime from "regenerator-runtime";
import { Grid, Typography, withStyles } from "@material-ui/core"

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../../components/layout.js'

import { getSubcategories, getSubcategory } from "../../../functions"


@withStyles( (theme) => ({
  image: {
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#d5d5d5"
  },
  stepsGrid: {
    width:"100%",
    margin:"50px auto"
  },
  tileActionText: {
    borderBottom:"1px solid",
    width:"fit-content",
    margin:"20px 10px 0 0",
    textTransform:"uppercase"
  },
  tileTitle: {
    margin:"15px auto 0",
    fontWeight:"bold"
  },
  tileSubTitle:{
    margin:"15px 0"
  }
}))

export default class Subcategory extends React.Component {

  render() {
    const { subcategoryData, classes } = this.props
    return <Layout>
              <Grid dangerouslySetInnerHTML={{ __html: subcategoryData.body }}></Grid>
            </Layout>
  }
}

export async function getStaticPaths() {
  let paths = await getSubcategories()

  paths = paths.map(x => {
    return {
      params: {
        id: x.id,
        category: x.category.id
      }
    }
  })

  return  {
            paths,
            fallback: false
          }
}

export async function getStaticProps({ params }) {

  let subcategory = await getSubcategory( params.category, params.id )

  return {
    props: {
      subcategoryData: subcategory
    }
  }
}
