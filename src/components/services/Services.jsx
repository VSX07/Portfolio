import { useRef } from "react";
import "./services.scss";
import { motion , useInView } from "framer-motion";

const variants={
    initial:{
        x: -500,
        y:100,
        opacity:0,
    },
    animate: {
       x: 0,
       opacity:1,
       y:0,
       transition:{
        duration:1,
        staggerChildren:0.1,
       },
    },     
};

const Services=()=>{
    const ref=useRef();

    const isInView = useInView(ref, {margin :"-100px" });

    return(
        <motion.div className="services" variants={variants} 
        initial="initial"  
        ref={ref}
        animate={ isInView && "animate"}>
        <motion.div className="textcontainer" variants={variants}>
        <p>I specialize in solving complex problems
                    <br /> through data structures and algorithms.
                </p>
        <hr/>
        </motion.div>
        <motion.div className="titlecontainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                <motion.b whileHover={{color:"orange"}}>React </motion.b>Developer
                </h1>
             </div>
             <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Problem </motion.b>Solving.
                </h1>
                <button>What I am Good at?</button>
             </div>
        </motion.div>
        <motion.div className="listcontainer" variants={variants}>
            <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
                <h2>Web Development</h2>
                <p>
                 HTMl,

                 CSS,

                 Java Script,

                 React.
                </p>
                <button >G0</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>DSA</h2>
                <p>
                I have completed more than 250  <br />
                questions on leetcode.
                </p>
              
                <button onClick={() => window.open('https://leetcode.com/u/VSX07/', '_blank')}>G0</button>
            </motion.div>
        </motion.div>
        </motion.div>
    )
}

export default Services;