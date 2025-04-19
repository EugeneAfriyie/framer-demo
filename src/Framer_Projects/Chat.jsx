import { motion, useScroll, useTransform } from "framer-motion";

function Chat() {
  const { scrollYProgress } = useScroll(); 
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); 

  return (
    <motion.div
      style={{
        opacity,             
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        margin: "100vh 0",   
      }}
    >
      I fade out as you scroll
    </motion.div>
  );
}

export default Chat;
