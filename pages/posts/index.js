import AllPosts from "../../components/posts/all-posts";

const AllPostsPage = () => {

    const DUMMY_DATA = [
        { 
            slug:"getting-started-with-nextJs",
             title:"Getting started with next js",
              image:"getting-started-with-nextjs.png", 
              excerpt:"This is a framework of the react and nextjs", 
              date:"2022-02-23", },
        { 
            slug:"getting-started-with-nextJs2",
             title:"Getting started with next js",
              image:"getting-started-with-nextjs.png", 
              excerpt:"This is a framework of the react and nextjs", 
              date:"2022-02-23", },
        { 
            slug:"getting-started-with-nextJs3",
             title:"Getting started with next js",
              image:"getting-started-with-nextjs.png", 
              excerpt:"This is a framework of the react and nextjs", 
              date:"2022-02-23", },
        { 
            slug:"getting-started-with-nextJs4",
             title:"Getting started with next js",
              image:"getting-started-with-nextjs.png", 
              excerpt:"This is a framework of the react and nextjs", 
              date:"2022-02-23" ,},
            
            ];



    
  return <AllPosts  posts={DUMMY_DATA}/>;
};

export default AllPostsPage;
