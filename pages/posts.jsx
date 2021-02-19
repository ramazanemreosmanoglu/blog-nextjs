import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'


export default class Posts extends React.Component {
    // Posts will get as prop.
    render() {
        let posts = this.props.posts.posts;
        return (
            <>
            <Head>
                <title>Posts</title>
            </Head>
            
            <div className={styles.container}>
                <a href={"/"}>Go back</a>
                <h1>Posts</h1>
                {posts.map(this.eachItem)}
            </div>
            </>
        )
    }

    eachItem(item) {
        return (
            <>
            <hr/>
            <a href={item.url}>{item.title}</a>
            </>
        )
    }
}


export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/get_posts");
    const json_response = await res.json();
  
    return {
      props: {
        posts: json_response,
      }
    }
  }