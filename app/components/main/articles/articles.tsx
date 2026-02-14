'use client';
import { JSX, useRef } from "react";
import { articles } from "./dataArticles/articles.data";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import animationConfig from "../../../configs/animationConfigs/framer.config";

export default function Articles(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {amount: .3, once: true});
  
  return (
    <section id="articles">
      <div className="article-block">
        <div className="decorate-us-1-s decorate-us"></div>
        <div className="articles-section" ref={ref}>
          <div className="article-image-block generic-article">
            <div className="generic-image-block-title">
              <h3>Полезные статьи</h3>
            </div>
          </div>
          <div className="articles-card generic-article">
            {
              articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{...animationConfig.verticaleTranslate.initial}}
                  animate={inView ? {...animationConfig.verticaleTranslate.animate} : {}}
                  transition={{
                    duration: .4,
                    ease: animationConfig.animationEasing.easeOut,
                    delay: index * .1
                  }}
                >
                  <Link 
                    href={`/articlePage/${article.slug}`}
                    className="article-card"
                  >
                    <span>{article.title}</span>
                  </Link>
                </motion.div>
              ))
            }
          </div>
        </div>
        <div className="decorate-us-2-s decorate-us"></div>
      </div>
    </section>
  )
}