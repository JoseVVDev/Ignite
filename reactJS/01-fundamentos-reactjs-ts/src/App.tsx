import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      name: "Author 1",
      role: "Role 1 @ Roles"
    },
    content: [
      { type: "paragraph" , content :"Lorem Ipsu" },
      { type: "paragraph" , content :"Fugit dicta, voluptatibus magni corporis consectetur ipsum dolorum explicabo, esse, voluptate ipsa alias maiores eius omnis quod porro?" },
      { type: "link", content: "mock.portfolio/mockup"}
    ],
    publishedAt: new Date('2022-06-15 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1620689918623-37cb53f56c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      name: "Author 2",
      role: "Role 2 @ Roles"
    },
    content: [
      { type: "paragraph" , content :"Lorem Ipsu" },
      { type: "paragraph" , content :"Fugit dicta, voluptatibus magni corporis consectetur ipsum dolorum explicabo, esse, voluptate ipsa alias maiores eius omnis quod porro?" },
      { type: "link", content: "mock.portfolio/mockup"}
    ],
    publishedAt: new Date('2022-06-10 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
