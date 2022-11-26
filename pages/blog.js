import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return <div key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h2>{blogItem.title}</h2>
            </Link>
            <p>{blogItem.content.substr(0, 190)} ...</p>
          </div>
        })}
      </main >
    </div >
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog
