import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Blog from '../components/Blog/Blog';
// import data from '../data/blog-data';
import ReactMarkdown from 'react-markdown';
import data from '../data/blog-data';

console.log(data);
{/*
const articlepost = () => {
    fetch('../data/blog-articles/Test1.md')
        .then(res => res.text())
        .then(post => post.setState((state) => ({ ...state, post })))
        .catch((err) => console.error(err));
}
console.log(fetch('../data/blog-articles').then(res => res.text()).then(post => this.setState((state) => ({ ...state, post }))));
*/}
//const importAll = (r) => r.keys().map(r);
//const markdownFiles = importAll(require.context('../data/blog-articles', true, /\.md$/))
 //   .sort()
  //  .reverse();
const cache = {};

function importAll (r) {
    r.keys().forEach(key => cache[r(key)] = key);
}
importAll(require.context("../data/blog-articles", false, /\.md$/));

console.log(cache);

const markdownContext = require.context('../data/blog-articles', false, /\.md$/);
const markdownFiles = markdownContext
    .keys()
    .map((filename) => markdownContext(filename))
    .reverse();


    
// console.log(markdownContext);

console.log(markdownFiles)

class BlogStream extends Component {
    state = {
        posts: [],
    }

    async componentDidMount() {
        const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));

        this.setState((state) => ({ ...state, posts }));
    }

    render() {
        const { posts } = this.state;
        
        return (
            <Main>
                <Helmet title='Blog'/>
                {
                    posts.map((post, idx) => (
                        <article className = 'post' id='blogposts' key={idx}>
                            <h4 className='daterange'>{data[cache[markdownFiles[idx]]]['date']}</h4>
                            <h1>{data[cache[markdownFiles[idx]]]['title']}</h1>
                            <ReactMarkdown source = {post} />
                        </article>
                        
                    ))
                }
                {/*
                <article className = 'post' id='blogposts'>
                    <ReactMarkdown source = {post} />
                </article>
                */}
            </Main>
        );
    }
}



{/*
    const markdownContext = require.context('../data/blog-articles', false, /\.md$/);

const BlogStream = () => (
    <Main>
        <Helmet title='Blog' />
        <article className='post'>
            <ReactMarkdown source={articlepost.state} />
        </article>   
        

        <article className='post' id='blogposts'>
            
            {data.map((blogpost) => (
                <Blog
                data={blogpost}
                key={blogpost.title}
                />
            ))}
            
        </article>

    </Main>
);
        */}
export default BlogStream;