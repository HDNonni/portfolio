import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import SmallCardImage from "./SmallCardImage";
import melonyKids from "../assets/images/meAndMelsKids.jpg";
import mcImage from "../assets/images/mom1.png";
import flowerImage from "../assets/images/frontFlowers.jpg";
import jeannesKids from "../assets/images/jeanesKids.jpg";
import brieWalk from "../assets/images/brieWalk19.png";
import styles from "./Fun.module.css";

function Fun() {
  return (
    <div>
      <Nav />
      <h1 className={styles.funHeading}>Fun Stuff!</h1>
      <div className={styles.contentFun}>
        <div className={styles.mainFun}>
          <div className={styles.sectionOne}>
            <h3> What I do For Fun</h3>
            <div>
              Fun is, according to "Merriam-Webster"Dictionary,what provides
              amusement or enjoyment
            </div>
            <div>What is your meaning of fun? Mine is...</div>
          </div>
          <div>
           <div className = {styles.moveImage}>
              <SmallCardImage
                
                imageSource={mcImage}
                imageAlternative="my bike"
                imageHead=""
                imageDescr=""
              />
            </div>
              Riding My Motorcycle
              <div className={styles.additionalItems}>
                {" "}
                Make exciting Websites
              </div>
            

            <div>
            <div className = {styles.moveImage}>
              <SmallCardImage
                imageSource={jeannesKids}
                imageAlternative="grandkids"
                imageHead=""
                imageDescr=""
              />
              </div>
              Playing with my Grandkids
              <div className={styles.additionalItems}>Learning new stuff</div>
            </div>

            <div>
            <div className = {styles.moveImage}>
              <SmallCardImage
                imageSource={flowerImage}
                imageAlternative="front flowers"
                imageHead=""
                imageDescr=""
              />
              </div>
              Playing in the dirt! (gardening)
              <div className={styles.additionalItems}>
                Going out with friends
              </div>
            </div>

            <div>
            <div className = {styles.moveImage}>
              <SmallCardImage
                imageSource={melonyKids}
                imageAlternative="grandkids"
                imageHead=""
                imageDescr=""
              />
              </div>
              Cooking and Baking for the family
              <div className={styles.additionalItems}>
                Relaxing with a good book
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainFun}>
          <div className={styles.columnFun2}>
            <div className={styles.sectionOne}>
              <h3>Other Fun Things to do!</h3>
              <div className={styles.content_items}>
                <div>
                  I often find myself, telling my patients, to save some energy
                  to have Fun!
                </div>
                <div>
                  They usually look at me like I am crazy, but it is important
                  to have fun!
                </div>
                <div>
                  Having fun releases serotonin in your brain, which makes you
                  feel happy. In addition dopamine is also released which plays
                  a part in blood flow, digestion, executive function, memory
                  and focus to name a few. All of which are important in daily
                  life, especially when it comes to learning new things!
                </div>
                <div>
                  Besides all the health benefits, fun also makes you happy ,
                  reduces stress, improves relationships and forms worthwhile
                  memories.{" "}
                </div>
              </div>
              <div className={styles.fun_item}>So go and have some FUN!</div>
              <div className={styles.midImage}>
                <SmallCardImage
                  imageSource={brieWalk}
                  imageAlternative="family"
                  imageHead=""
                  imageDescr=""
                />
              </div>
              <div className={styles.list_heading}>
                Here is a Few Fun Suggestions
              </div>
              <div>
                <ul className={styles.list_items}>
                  <li>
                    Go outside! Garden, go to the beach, talk a walk, just go
                    outside!
                  </li>
                  <li>
                    Learn a new skill...woodworking, knitting, painting or a
                    language.
                  </li>
                  <li>Have some friends over and play boardgames </li>
                  <li>
                    Museums...there are alot of cool things at a Science
                    Museum...check it out!
                  </li>
                  <li>
                    Take a class, on anything that interests you. You can learn
                    something, meet people and have fun doing it!
                  </li>
                  <li>
                    Read or listen to a book...they have this way of taking you
                    on awesome adventures!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.gifStyle}>
        <a href="https://www.gifs.cc">Free Clipart and Gifs</a>
      </p>
      <Footer />
    </div>
  );
}

export default Fun;
