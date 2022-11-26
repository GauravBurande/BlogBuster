import React, { useState, useEffect } from 'react'
import styles from "../../styles/BlogPost.module.css"

const Slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog)

  function createmarkup (content) {
    return {__html: content}
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        {blog && <div dangerouslySetInnerHTML={createmarkup(blog.content)}></div>}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()

  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}

export default Slug
