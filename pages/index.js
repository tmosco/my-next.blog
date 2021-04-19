import Hero from "../components/homePage/hero";
import FeaturedPost from "../components/homePage/featuredPost"

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

const HomPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_DATA}/>
    </>
  );
};

export default HomPage;
