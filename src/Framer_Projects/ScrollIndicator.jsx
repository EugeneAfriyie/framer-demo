import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollIndicator = () => {
    const{ scrollYProgress} = useScroll();
    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <>
                {/* RedLine  */}
        <div className="h-[200vh] p-[20px]">
           <motion.div className="fixed top-0 left-0 h-[5px] bg-red-500"
            style={{ width: lineWidth }}
            transition={{ duration: 0.5 }}></motion.div>

           {/* Random Text  */}

           <div className="mt-[50px]">
            {[...Array(50)].map((_, index) => (
                <p key={index} className="text-black text-[20px] font-bold mb-[10px] text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perferendis aliquam, quisquam soluta fuga rem architecto quibusdam enim consequatur tenetur eveniet? Veniam exercitationem ab magni fugiat quibusdam eum, aspernatur eligendi delectus odio assumenda a ipsum excepturi repellendus esse explicabo! Placeat aliquam dolores rerum eveniet voluptatum explicabo magnam fugiat ab ex beatae ipsa molestias aliquid non aut libero culpa omnis hic obcaecati ullam aspernatur, alias earum. Eum rem earum sunt molestiae corrupti molestias cupiditate optio aliquam iusto itaque quibusdam odio, fugit vel deserunt sapiente neque distinctio obcaecati nostrum eius officia aliquid corporis sit? At, velit! Labore, voluptatum odit. Autem, praesentium necessitatibus!
                </p>
            ))}
           </div>
        </div>

    </>
  )
}

export default ScrollIndicator