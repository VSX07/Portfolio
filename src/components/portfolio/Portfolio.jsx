import "./portfolio.scss";
import {motion,useScroll,useSpring,useTransform} from "framer-motion";
import {useRef} from "react";
const items=[
    {
        id:1,
        title:"My Github Profile",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tvx2BFjpYmfiIBLV25XIfVZy4KhCYFLB7w&s",
        desc:"Explore my repositories on data structures, algorithms, and other projects. ",
        url:"https://github.com/VSX07",
    },
    {
        id: 2,
        title: "Portfolio Project",
        img: "https://images.pexels.com/photos/17443857/pexels-photo-17443857/free-photo-of-a-book-store-with-many-books-on-shelves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "My personal portfolio showcasing various projects.",
        url: "https://github.com/VSX07/Portfolio-Project"
    },
    {
        id: 3,
        title: "Data Structures and Algorithms",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KBLbzVhnZz_i3EFmbM1rLIoydeFxMq7ATQ&s",
        desc: "A collection of various data structures and algorithms.",
        url: "https://github.com/VSX07/-trees-and-graphs-implementations-"
       
    },
];
const Single=({item})=>{

    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,});
    const y=useTransform(scrollYProgress,[0,1],[-300,300]);
    const handleButton = () => {
        window.location.href = item.url;
    };
    return (
        <section >
            <div className="container">
            <div className="wrapper">
            <div className="imagecontainer" ref={ref} >
        <img src={item.img} alt=""/>
        </div>
        <motion.div className="textContainer" style={{y}}>
           <h2>{item.title}</h2>
           <p>{item.desc}</p>
           <button onClick={handleButton}>Go</button>
        </motion.div>
        </div>
        </div>
      </section>
    );
};

const Portfolio=()=>{
    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{
          damping:40,
    });
    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item)=>(
               <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};


export default Portfolio;